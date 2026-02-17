// Popular apps for compatibility section
// Icon options (in order of priority):
// 1. iconPath - relative path to SVG in public folder (e.g., '/icons/notion.svg')
// 2. iconUrl - external URL to fetch icon from
// 3. icon - fallback to built-in SVG icon key

export interface AppItem {
  name: string;
  icon?: string;      // Built-in icon key (fallback)
  iconPath?: string;  // Path to SVG in public folder (e.g., '/icons/notion.svg')
  iconUrl?: string;   // External URL to icon
}

export const apps: AppItem[] = [
  // Row 1
  { name: 'Notion', iconPath: '/icons/notion.svg' },
  { name: 'Slack', iconPath: '/icons/slack.svg' },
  { name: 'VS Code', iconPath: '/icons/vscode.svg' },
  { name: 'Apple Notes', iconPath: '/icons/notes.svg' },
  { name: 'Discord', icon: 'discord' },
  { name: 'Obsidian', iconPath: '/icons/obsidian.svg' },
  { name: 'Chronocat', iconPath: '/icons/chronocat.png' },
  
  // Row 2
  { name: 'Linear', iconPath: '/icons/linear.svg' },
  { name: 'Mail', iconPath: '/icons/outlook.svg' },
  { name: 'Xcode', iconPath: '/icons/xcode.svg' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Things', icon: 'things' },
  { name: 'Messages', iconPath: '/icons/messages.svg' },
  { name: 'Cursor', iconPath: '/icons/cursor.svg' },
  
  // Row 3
  { name: 'Figma', icon: 'figma' },
  { name: 'Microsoft Word', iconPath: '/icons/word.svg' },
  { name: 'Terminal', icon: 'terminal' },
  { name: 'Chrome', iconPath: '/icons/chrome.svg' },
  { name: 'Safari', iconPath: '/icons/safari.svg' },
  { name: 'Google Docs', icon: 'gdocs' },
  { name: 'ChatGPT', iconPath: '/icons/chatgpt.png' },
];

// ============================================================
// EXAMPLES - How to use custom icons:
// ============================================================
// 
// 1. Using a local SVG file (place in public/icons/ folder):
//    { name: 'Notion', iconPath: '/icons/notion.svg' },
// 
// 2. Using an external URL:
//    { name: 'Slack', iconUrl: 'https://example.com/slack-icon.svg' },
//    { name: 'Chrome', iconUrl: 'https://cdn.simpleicons.org/googlechrome' },
// 
// 3. Using the built-in fallback SVG:
//    { name: 'Discord', icon: 'discord' },
//
// Priority order: iconPath > iconUrl > icon (built-in)
// ============================================================
