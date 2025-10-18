import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

final maneUrl = Provider<WebUri>((ref) => WebUri(dotenv.env['MANE_URL']!));

final webviewcontrolerprovider = Provider<InAppWebViewController?>(
  (ref) => null,
);

final inAppWebViewSettingsProvider = Provider<InAppWebViewSettings>((ref) {
  return InAppWebViewSettings(
    javaScriptEnabled: true,
    allowFileAccessFromFileURLs: true,
    allowUniversalAccessFromFileURLs: true,
  );
});

final pullToRefreshControllerprovider = Provider<PullToRefreshController?>((
  ref,
) {
  return PullToRefreshController(
    settings: PullToRefreshSettings(color: Colors.blue),
    onRefresh: () async {
      final controller = ref.read(webviewcontrolerprovider);
      if (controller != null) {
        controller.reload();
      }
    },
  );
});
