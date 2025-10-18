package com.kiosktawkit.app

import android.content.Intent
import android.content.ComponentName
import android.content.pm.PackageManager
import android.os.Bundle
import android.view.KeyEvent
import android.view.WindowManager
import android.app.ActivityManager
import android.content.Context
import android.media.AudioManager
import android.content.Context.AUDIO_SERVICE
import io.flutter.embedding.android.FlutterActivity
import io.flutter.plugin.common.MethodChannel

class MainActivity : FlutterActivity() {
    
    private val CHANNEL = "launcher_exit"
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Set up method channel
        val messenger = flutterEngine?.dartExecutor?.binaryMessenger
        if (messenger != null) {
            MethodChannel(messenger, CHANNEL).setMethodCallHandler { call, result ->
                println("Method channel called with method: ${call.method}")
                when (call.method) {
                    "showExitDialog" -> {
                        println("showExitDialog called")
                        openLauncherSelection()
                        result.success(null)
                    }
                    "openSystemSettings" -> {
                        println("openSystemSettings called from Flutter")
                        openSystemSettings()
                        result.success(null)
                    }
                    else -> {
                        println("Unknown method: ${call.method}")
                        result.notImplemented()
                    }
                }
            }
        }
        
        // Enable kiosk mode
        enableKioskMode()
        
        // Configure audio for Athan
        configureAudio()
        
        // Set as default launcher if possible
        setAsDefaultLauncher()
        
    }
    
    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        
        // Handle launcher intents
        if (intent.action == Intent.ACTION_MAIN && 
            (intent.hasCategory(Intent.CATEGORY_HOME) || 
             intent.hasCategory(Intent.CATEGORY_LEANBACK_LAUNCHER))) {
            // This is a launcher intent, keep the app running
            return
        }
    }
    
    private fun setAsDefaultLauncher() {
        try {
            // Try to set as default launcher programmatically
            val packageManager = packageManager
            val componentName = ComponentName(this, MainActivity::class.java)
            
            // Enable the component
            packageManager.setComponentEnabledSetting(
                componentName,
                PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                PackageManager.DONT_KILL_APP
            )
            
            // Try to set as home activity
            val intent = Intent(Intent.ACTION_MAIN)
            intent.addCategory(Intent.CATEGORY_HOME)
            intent.addCategory(Intent.CATEGORY_DEFAULT)
            intent.addCategory(Intent.CATEGORY_LEANBACK_LAUNCHER)
            intent.component = componentName
            
            startActivity(intent)
            
            // Start the auto-start service
            val serviceIntent = Intent(this, AutoStartService::class.java)
            startService(serviceIntent)
            
        } catch (e: Exception) {
            // Ignore if we can't set as default
        }
    }
    
        private fun enableKioskMode() {
            // Make the app fullscreen
            window.setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
            )
            
            // Keep screen on
            window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
            
            // Hide system UI for true kiosk mode
            window.decorView.systemUiVisibility = (
                android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                or android.view.View.SYSTEM_UI_FLAG_FULLSCREEN
                or android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            )
        }

        private fun configureAudio() {
            try {
                // Configure audio manager for better audio playback
                val audioManager = getSystemService(Context.AUDIO_SERVICE) as AudioManager
                
                // Set audio mode to normal for better audio playback
                audioManager.mode = AudioManager.MODE_NORMAL
                
                // Ensure media volume is not muted
                if (audioManager.isStreamMute(AudioManager.STREAM_MUSIC)) {
                    audioManager.setStreamMute(AudioManager.STREAM_MUSIC, false)
                }
                
                // Set a reasonable volume level if it's too low
                val currentVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC)
                val maxVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)
                
                if (currentVolume < maxVolume / 3) {
                    audioManager.setStreamVolume(
                        AudioManager.STREAM_MUSIC,
                        maxVolume / 2,
                        AudioManager.FLAG_REMOVE_SOUND_AND_VIBRATE
                    )
                }
                
            } catch (e: Exception) {
                // Ignore audio configuration errors
            }
        }
    
    override fun onBackPressed() {
        // Disable back button in kiosk mode
        // Do nothing to prevent exiting the app
    }
    
    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        // Handle TV remote navigation
        when (keyCode) {
            KeyEvent.KEYCODE_BACK -> {
                // Disable back button
                return true
            }
            KeyEvent.KEYCODE_HOME -> {
                // Handle home button - keep app running
                return true
            }
            KeyEvent.KEYCODE_MENU -> {
                // Disable menu button
                return true
            }
        }
        return super.onKeyDown(keyCode, event)
    }
    
    override fun onKeyUp(keyCode: Int, event: KeyEvent?): Boolean {
        // Handle TV remote navigation
        when (keyCode) {
            KeyEvent.KEYCODE_BACK,
            KeyEvent.KEYCODE_HOME,
            KeyEvent.KEYCODE_MENU -> {
                return true
            }
        }
        return super.onKeyUp(keyCode, event)
    }
    
        private fun openLauncherSelection() {
            try {
                // Temporarily disable auto-start service to prevent immediate restart
                val serviceIntent = Intent(this, AutoStartService::class.java)
                stopService(serviceIntent)
                
                // Open the system launcher selection screen
                val intent = Intent(Intent.ACTION_MAIN)
                intent.addCategory(Intent.CATEGORY_HOME)
                intent.addCategory(Intent.CATEGORY_DEFAULT)
                intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
                
                // Try to open the launcher selection
                startActivity(intent)

            } catch (e: Exception) {
                // If launcher selection fails, try to open home settings
                try {
                    val settingsIntent = Intent(android.provider.Settings.ACTION_HOME_SETTINGS)
                    settingsIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    startActivity(settingsIntent)
                } catch (e2: Exception) {
                    // If all else fails, just finish the activity
                    finish()
                }
            }
        }

        private fun openSystemSettings() {
            try {
                println("openSystemSettings called")
                // Try multiple approaches to open settings
                
                // First try: General settings
                try {
                    val intent = Intent(android.provider.Settings.ACTION_SETTINGS)
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
                    startActivity(intent)
                    println("General settings intent started")
                    return
                } catch (e: Exception) {
                    println("General settings failed: ${e.message}")
                }
                
                // Second try: Home settings
                try {
                    val homeSettingsIntent = Intent(android.provider.Settings.ACTION_HOME_SETTINGS)
                    homeSettingsIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
                    startActivity(homeSettingsIntent)
                    println("Home settings intent started")
                    return
                } catch (e: Exception) {
                    println("Home settings failed: ${e.message}")
                }
                
                // Third try: Apps settings
                try {
                    val appsIntent = Intent(android.provider.Settings.ACTION_APPLICATION_SETTINGS)
                    appsIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
                    startActivity(appsIntent)
                    println("Apps settings intent started")
                    return
                } catch (e: Exception) {
                    println("Apps settings failed: ${e.message}")
                }
                
                // Fourth try: Device settings
                try {
                    val deviceIntent = Intent(android.provider.Settings.ACTION_DEVICE_INFO_SETTINGS)
                    deviceIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
                    startActivity(deviceIntent)
                    println("Device settings intent started")
                    return
                } catch (e: Exception) {
                    println("Device settings failed: ${e.message}")
                }
                
                println("All settings attempts failed")
                
            } catch (e: Exception) {
                println("Error in openSystemSettings: ${e.message}")
            }
        }
}
