package com.splash;

import android.os.Bundle;

import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

    protected void onCreate(Bundle savedIstanceState){
        super.onCreate(savedIstanceState);
    }

    @Override
    protected String getMainComponentName() {
        return "splash";
    }
}
