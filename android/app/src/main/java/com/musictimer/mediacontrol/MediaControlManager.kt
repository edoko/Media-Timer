package com.musictimer.mediacontrol

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.os.Build
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class MediaControlManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "MediaControl"
    }

    private var maxVolume = 0
    private val am = reactApplicationContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
    private val TAG = "MediaControl"

    init {
        maxVolume = am.getStreamMaxVolume(AudioManager.STREAM_MUSIC)
        Log.i(TAG, "MaxVolume: $maxVolume")
    }

    @ReactMethod
    private fun getCurrentVolume(): Int {
        return am.getStreamVolume(AudioManager.STREAM_MUSIC)
    }

    @ReactMethod
    private fun getMaxVolume(): Int {
        return maxVolume
    }

    @ReactMethod
    private fun pauseMedia() {
        Log.i(TAG, "Current Volume: ${getCurrentVolume()}")
        Log.i(TAG, "Current Max Volume: $maxVolume")

        if (am.isMusicActive) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                am.requestAudioFocus(AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
                        .setAudioAttributes(AudioAttributes.Builder()
                                .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
                                .setUsage(AudioAttributes.USAGE_MEDIA)
                                .build())
                        .setAcceptsDelayedFocusGain(true)
                        .setOnAudioFocusChangeListener { }
                        .build())
                Log.i(TAG, "Stop! - Oreo")
            } else {
                am.requestAudioFocus(null,
                        AudioManager.STREAM_MUSIC,
                        AudioManager.AUDIOFOCUS_GAIN)
                Log.i(TAG, "Stop! - Oreo ?")
            }
        }
    }

}