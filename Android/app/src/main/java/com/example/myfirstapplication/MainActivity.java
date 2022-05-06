package com.example.myfirstapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    WebView wv_test;
    Button btn_makeSentence;
    Button btn_webAdd;

    private static final String JSOBJECT = "MyJS";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_main);
        setContentView(R.layout.first_layout);
        Button button1 = (Button) findViewById(R.id.button_1);
        button1.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                Toast.makeText(MainActivity.this, "You clicked Button 1",
                        Toast.LENGTH_SHORT).show();
            }
        });
        //获取webview组件
        wv_test = findViewById(R.id.wv_test);
        // 通过addJavascriptInterface方法 将Android里面提供的方法对象集合JSObject暴露给页面，同时也将页面的提供的js方法注册给Android
        wv_test.addJavascriptInterface(new JSObject(this), JSOBJECT);
        // 加载网页,若非本地页面,则把下面的加载地址换在页面url
        wv_test.loadUrl("file:///android_asset/index.html");
        //wv_test.loadUrl("file:///android_asset//index.html");
    }
    public boolean onCreateOptionsMenu(Menu menu)
    {
        getMenuInflater().inflate(R.menu.main,menu);
        return true;
    }
}