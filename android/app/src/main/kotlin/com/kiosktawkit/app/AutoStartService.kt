package com.kiosktawkit.app

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.util.Log
import android.app.ActivityManager
import android.content.Context

class AutoStartService : Service() {
    
    override fun onBind(intent: Intent?): IBinder? = null
    
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        Log.d("AutoStartService", "Service started")
        
        // Check if our app is running
        if (!isAppRunning()) {
            Log.d("AutoStartService", "App not running - starting kiosk app")
            startKioskApp()
        }
        
        // Keep service running
        return START_STICKY
    }
    
    private fun isAppRunning(): Boolean {
        val activityManager = getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        val runningTasks = activityManager.getRunningTasks(1)
        
        for (task in runningTasks) {
            if (task.topActivity?.packageName == packageName) {
                return true
            }
        }
        return false
    }
    
    private fun startKioskApp() {
        try {
            val intent = Intent(this, MainActivity::class.java)
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
            intent.addCategory(Intent.CATEGORY_HOME)
            intent.addCategory(Intent.CATEGORY_DEFAULT)
            intent.addCategory(Intent.CATEGORY_LEANBACK_LAUNCHER)
            startActivity(intent)
        } catch (e: Exception) {
            Log.e("AutoStartService", "Failed to start kiosk app", e)
        }
    }
    
    override fun onDestroy() {
        super.onDestroy()
        Log.d("AutoStartService", "Service destroyed")
    }
}
