package com.kiosktawkit.app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

class BootReceiver : BroadcastReceiver() {
    
    override fun onReceive(context: Context, intent: Intent) {
        when (intent.action) {
            Intent.ACTION_BOOT_COMPLETED,
            "android.intent.action.QUICKBOOT_POWERON" -> {
                Log.d("BootReceiver", "Boot completed - starting kiosk app")
                startKioskApp(context)
            }
            Intent.ACTION_MY_PACKAGE_REPLACED,
            Intent.ACTION_PACKAGE_REPLACED -> {
                Log.d("BootReceiver", "Package replaced - restarting kiosk app")
                startKioskApp(context)
            }
        }
    }
    
    private fun startKioskApp(context: Context) {
        try {
            val intent = Intent(context, MainActivity::class.java)
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
            intent.addCategory(Intent.CATEGORY_HOME)
            intent.addCategory(Intent.CATEGORY_DEFAULT)
            intent.addCategory(Intent.CATEGORY_LEANBACK_LAUNCHER)
            context.startActivity(intent)
            
            // Also start the auto-start service
            val serviceIntent = Intent(context, AutoStartService::class.java)
            context.startService(serviceIntent)
        } catch (e: Exception) {
            Log.e("BootReceiver", "Failed to start kiosk app", e)
        }
    }
}
