/*
 * You need to add the following setting to your VS Code settings 
 * so that characters like '@>' have the correct colorization:
 * 
 *     "editor.bracketPairColorization.enabled": false
 * 
 * This way, VS Code won't complain if the '>' character comes
 * right after '@' and doesn't have a '<' before it to match.
 */
import vscode = require("vscode");

// code that runs on activation of the extension, 
// setting validation of brackts false, so magic-statements
// like '@>' dont have problems with syntax-highlighting.
export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.getConfiguration().update(
    "editor.bracketPairColorization.enabled",
    false,
    vscode.ConfigurationTarget.Workspace
  );

  // Yeah, I know; but just to be sure and have no surprises.
  vscode.workspace.getConfiguration().update(
    "editor.bracketPairColorization.enabled",
    false,
    vscode.ConfigurationTarget.Global
  );

}

export function deactivate() { }
