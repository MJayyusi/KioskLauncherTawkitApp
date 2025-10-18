import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class BackDialog extends StatelessWidget {
  const BackDialog({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Center(child: Text('اغلق التطبيق')),
      actionsAlignment: MainAxisAlignment.spaceAround,
      actions: [
        BackButton(
          style: const ButtonStyle(
            side: WidgetStatePropertyAll(BorderSide(width: 2)),
          ),
          onPressed: () {
            Navigator.of(context).pop();
          },
        ),
        CloseButton(
          style: const ButtonStyle(
            side: WidgetStatePropertyAll(BorderSide(width: 2)),
          ),
          onPressed: () {
            SystemChannels.platform.invokeMethod<void>('SystemNavigator.pop');
          },
          color: Colors.red,
        ),
      ],
    );
  }
}
