import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:tawkit/features/webview/presentation/providers/webview_provider.dart';
import '../widgets/dialog.dart';

class WebviewC extends ConsumerStatefulWidget {
  const WebviewC({super.key});

  @override
  ConsumerState<WebviewC> createState() => _WebviewCState();
}

class _WebviewCState extends ConsumerState<WebviewC> {
  InAppWebViewController? _webViewController;

  @override
  Widget build(BuildContext context) {
    final pullToRefreshController = ref.watch(pullToRefreshControllerprovider);
    return SafeArea(
      child: PopScope(
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
          initialSettings: InAppWebViewSettings(useOnDownloadStart: true),
          onPermissionRequest: (controller, request) async {
            return PermissionResponse(
              resources: request.resources,
              action: PermissionResponseAction.GRANT,
            );
          },
          onDownloadStartRequest: (controller, url) async {},
        ),
      ),
    );
  }
}
