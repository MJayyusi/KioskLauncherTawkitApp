package com.kiosktawkit.app

import android.content.Intent
import android.os.Bundle
import android.view.WindowManager
import io.flutter.embedding.android.FlutterActivity

class MainActivity : FlutterActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        // Enable kiosk mode
        enableKioskMode()
    }
    
    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        
        // Handle launcher intents
        if (intent.action == Intent.ACTION_MAIN && 
            intent.hasCategory(Intent.CATEGORY_HOME)) {
            // This is a launcher intent, keep the app running
            return
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
    
    override fun onBackPressed() {
        // Disable back button in kiosk mode
        // Do nothing to prevent exiting the app
    }
}
