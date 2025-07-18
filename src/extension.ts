import vscode = require("vscode");

export function activate(context: vscode.ExtensionContext) {
  // code that runs on activation of the extension,
  // set validation of brackts false, so magic-statements
  // like @> dont have problems with syntax-highlighting.
  vscode.workspace.getConfiguration().update(
    "editor.bracketPairColorization.enabled",
    false,
    vscode.ConfigurationTarget.Global
  );
  vscode.workspace.getConfiguration().update(
    "editor.bracketPairColorization.enabled",
    false,
    vscode.ConfigurationTarget.Workspace
  );
}

export function deactivate() { }
