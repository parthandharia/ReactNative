package com.drawer;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override

    protected void onCreate(Bundle savedIstanceState) {
        super.onCreate(savedIstanceState);

        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        finish();
    }
}
