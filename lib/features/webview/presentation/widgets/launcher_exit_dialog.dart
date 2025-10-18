import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class LauncherExitDialog extends StatefulWidget {
  const LauncherExitDialog({super.key});

  @override
  State<LauncherExitDialog> createState() => _LauncherExitDialogState();
}

class _LauncherExitDialogState extends State<LauncherExitDialog> {
  int _selectedIndex = 1; // Default to "Select Launcher" button

  @override
  Widget build(BuildContext context) {
    return Focus(
      autofocus: true,
      onKeyEvent: (node, event) {
        if (event is KeyDownEvent) {
          switch (event.logicalKey) {
            case LogicalKeyboardKey.arrowLeft:
              if (_selectedIndex > 0) {
                setState(() {
                  _selectedIndex--;
                });
              }
              return KeyEventResult.handled;
            case LogicalKeyboardKey.arrowRight:
              if (_selectedIndex < 1) {
                setState(() {
                  _selectedIndex++;
                });
              }
              return KeyEventResult.handled;
            case LogicalKeyboardKey.select:
            case LogicalKeyboardKey.enter:
            case LogicalKeyboardKey.space:
              if (_selectedIndex == 0) {
                Navigator.of(context).pop();
              } else {
                _openLauncherSelection();
              }
              return KeyEventResult.handled;
            case LogicalKeyboardKey.escape:
              Navigator.of(context).pop();
              return KeyEventResult.handled;
            default:
              return KeyEventResult.ignored;
          }
        }
        return KeyEventResult.ignored;
      },
      child: AlertDialog(
        title: const Center(child: Text('Exit Launcher Mode')),
        content: const Text(
          'This will open the system launcher selection screen where you can choose a different default launcher or return to the system launcher.',
          textAlign: TextAlign.center,
        ),
        actionsAlignment: MainAxisAlignment.spaceAround,
        actions: [
          Focus(
            autofocus: _selectedIndex == 0,
            child: TextButton(
              style: ButtonStyle(
                side: WidgetStatePropertyAll(
                  BorderSide(
                    width: 2,
                    color: _selectedIndex == 0 ? Colors.blue : Colors.grey,
                  ),
                ),
                backgroundColor: WidgetStatePropertyAll(
                  _selectedIndex == 0
                      ? Colors.blue.withValues(alpha: 0.1)
                      : Colors.transparent,
                ),
              ),
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text(
                'Cancel',
                style: TextStyle(
                  color: _selectedIndex == 0 ? Colors.blue : Colors.grey,
                  fontWeight: _selectedIndex == 0
                      ? FontWeight.bold
                      : FontWeight.normal,
                ),
              ),
            ),
          ),
          Focus(
            autofocus: _selectedIndex == 1,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: _selectedIndex == 1
                    ? Colors.blue
                    : Colors.grey,
                foregroundColor: Colors.white,
                side: BorderSide(
                  width: 2,
                  color: _selectedIndex == 1 ? Colors.blue : Colors.grey,
                ),
              ),
              onPressed: () {
                _openLauncherSelection();
              },
              child: Text(
                'Select Launcher',
                style: TextStyle(
                  fontWeight: _selectedIndex == 1
                      ? FontWeight.bold
                      : FontWeight.normal,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  void _openLauncherSelection() {
    // This will be handled by the Android side to open launcher selection
    SystemChannels.platform.invokeMethod<void>('SystemNavigator.pop');
  }
}
