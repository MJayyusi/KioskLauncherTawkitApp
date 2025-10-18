import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:tawkit/features/webview/presentation/providers/webview_provider.dart';
import '../widgets/dialog.dart';
import '../widgets/launcher_exit_dialog.dart';

class WebviewC extends ConsumerStatefulWidget {
  const WebviewC({super.key});

  @override
  ConsumerState<WebviewC> createState() => _WebviewCState();
}

class _WebviewCState extends ConsumerState<WebviewC> {
  InAppWebViewController? _webViewController;
  static const platform = MethodChannel('launcher_exit');

  @override
  void initState() {
    super.initState();
    _setupMethodChannel();
  }

  void _setupMethodChannel() {
    platform.setMethodCallHandler((call) async {
      switch (call.method) {
        case 'showExitDialog':
          if (mounted) {
            showDialog(
              context: context,
              builder: (BuildContext context) => const LauncherExitDialog(),
            );
          }
          break;
      }
    });
  }

  void _openSystemSettings() {
    print('_openSystemSettings called');

    // First show a dialog to confirm the button is working
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Settings Button Pressed'),
          content: const Text(
            'The button is working! This will now open system settings.',
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Cancel'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
                // Now try to open system settings
                platform
                    .invokeMethod('openSystemSettings')
                    .then((result) {
                      print('System settings opened successfully: $result');
                    })
                    .catchError((error) {
                      print('Error opening system settings: $error');
                    });
              },
              child: const Text('Open Settings'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final pullToRefreshController = ref.watch(pullToRefreshControllerprovider);
    return SafeArea(
      child: FocusTraversalGroup(
        policy: OrderedTraversalPolicy(),
        child: Stack(
          children: [
            PopScope(
              canPop: false,
              onPopInvokedWithResult: (didPop, result) async {
                if (_webViewController != null) {
                  bool? canGoBack = await _webViewController!.canGoBack();
                  if (canGoBack == true) {
                    _webViewController!.goBack();
                  } else if (context.mounted) {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) => const BackDialog(),
                    );
                  }
                } else if (context.mounted) {
                  showDialog(
                    context: context,
                    builder: (BuildContext context) => const BackDialog(),
                  );
                }
              },
              child: InAppWebView(
                onWebViewCreated: (controller) {
                  _webViewController = controller;
                },
                pullToRefreshController: pullToRefreshController,
                onLoadStop: (controller, url) {
                  pullToRefreshController?.endRefreshing();
                },
                onReceivedError: (controller, request, error) {
                  pullToRefreshController?.endRefreshing();
                },
                onProgressChanged: (controller, progress) {
                  if (progress == 100) {
                    pullToRefreshController?.endRefreshing();
                  }
                },
                initialUrlRequest: URLRequest(url: ref.read(maneUrl)),
                initialSettings: InAppWebViewSettings(
                  useOnDownloadStart: true,
                  mediaPlaybackRequiresUserGesture:
                      false, // Allow autoplay for Athan
                  allowsInlineMediaPlayback: true, // Allow inline audio
                  javaScriptEnabled: true,
                  allowFileAccessFromFileURLs: true,
                  allowUniversalAccessFromFileURLs: true,
                  domStorageEnabled: true, // Enable localStorage
                  databaseEnabled: true, // Enable database
                  clearCache: false, // Keep cache for settings
                ),
                onPermissionRequest: (controller, request) async {
                  return PermissionResponse(
                    resources: request.resources,
                    action: PermissionResponseAction.GRANT,
                  );
                },
                onDownloadStartRequest: (controller, url) async {},
              ),
            ),
            // Settings Button - TV Remote Compatible
            Positioned(
              top: 10,
              right: 10,
              child: Focus(
                autofocus: false,
                onKeyEvent: (node, event) {
                  print('Key event received: ${event.logicalKey}');
                  if (event is KeyDownEvent &&
                      (event.logicalKey == LogicalKeyboardKey.select ||
                          event.logicalKey == LogicalKeyboardKey.enter ||
                          event.logicalKey == LogicalKeyboardKey.space)) {
                    print('Key event matched, calling _openSystemSettings');
                    _openSystemSettings();
                    return KeyEventResult.handled;
                  }
                  return KeyEventResult.ignored;
                },
                child: Builder(
                  builder: (context) {
                    final isFocused = Focus.of(context).hasFocus;
                    return Container(
                      width: 12,
                      height: 12,
                      decoration: BoxDecoration(
                        color: isFocused
                            ? Colors.red.withValues(alpha: 0.8)
                            : Colors.black.withValues(alpha: 0.8),
                        shape: BoxShape.circle,
                        border: Border.all(
                          color: isFocused ? Colors.red : Colors.white,
                          width: isFocused ? 2 : 1,
                        ),
                      ),
                      child: Material(
                        color: Colors.transparent,
                        child: InkWell(
                          borderRadius: BorderRadius.circular(6),
                          onTap: () {
                            print('Button tapped, calling _openSystemSettings');
                            _openSystemSettings();
                          },
                          child: const SizedBox(width: 12, height: 12),
                        ),
                      ),
                    );
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
