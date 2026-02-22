/**
 * Blog posts - add new articles here for SEO-optimized discoverability.
 * Use keywords: best dictation app, speech to text, voice typing, typing speed, etc.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mellon-agent-mode-voice-ai-commands",
    title: "Agent Mode: Control AI With Your Voice Using \"Hey Mellon\"",
    description: "Mellon's Agent Mode lets you trigger AI commands by voice. Say \"Hey Mellon\" to transform, rewrite, or generate text — right where you're typing. Works with selected text or at your cursor.",
    date: "2026-02-22",
    excerpt: "Say \"Hey Mellon, summarize this\" and watch AI transform your text in place. Agent Mode brings voice-activated AI commands to any app on your Mac — no copy-pasting, no switching windows.",
    content: `
      <p>Mellon started as a dictation app: you speak, words appear. But what if your voice could do more than just type? What if you could <strong>command AI</strong> just by talking to it — and have it act on the text right in front of you?</p>
      <p>That's <strong>Agent Mode</strong>. Say "Hey Mellon" followed by any instruction, and Mellon sends your command — along with your current text context — to an AI model. The result gets pasted directly into your app. No copy-pasting. No switching to ChatGPT. Just speak and it happens.</p>

      <h2>How It Works</h2>
      <p>Agent Mode has two behaviours depending on whether you have text selected:</p>

      <h3>With Selected Text → Replace</h3>
      <p>If you've highlighted text in any app, Agent Mode treats that selection as the target. The AI sees your selected text and your spoken command, then <strong>replaces the selection</strong> with its output.</p>
      <p>Examples:</p>
      <ul>
        <li><strong>"Hey Mellon, make this more concise"</strong> — rewrites the selected paragraph to be shorter</li>
        <li><strong>"Hey Mellon, translate this to French"</strong> — replaces the English text with French</li>
        <li><strong>"Hey Mellon, fix the grammar"</strong> — corrects errors in the selected text</li>
        <li><strong>"Hey Mellon, make this sound more professional"</strong> — adjusts tone while keeping meaning</li>
      </ul>

      <h3>Without Selected Text → Insert at Cursor</h3>
      <p>If nothing is selected, Agent Mode reads the text around your cursor position — what's before and after it — and <strong>inserts the AI's output right where your cursor is</strong>.</p>
      <p>Examples:</p>
      <ul>
        <li><strong>"Hey Mellon, write a follow-up sentence"</strong> — continues where you left off</li>
        <li><strong>"Hey Mellon, add a bullet list of three key points"</strong> — generates a list at the cursor</li>
        <li><strong>"Hey Mellon, write the conclusion for this email"</strong> — reads the email context and writes the ending</li>
      </ul>

      <h2>Works in Any App</h2>
      <p>Because Mellon operates at the system level, Agent Mode works wherever you can type: emails, documents, code editors, Slack, Notes, even browser text fields. You don't need a plugin or extension — Mellon reads the focused text field automatically.</p>

      <h2>Choose Your AI Provider</h2>
      <p>Agent Mode uses the same AI provider you've configured in Mellon's settings. You can choose from:</p>
      <ul>
        <li><strong>Anthropic (Claude)</strong> — great for nuanced writing and following complex instructions</li>
        <li><strong>OpenAI (GPT)</strong> — versatile, widely used</li>
        <li><strong>Google Gemini</strong> — strong at reasoning and multilingual tasks</li>
        <li><strong>Groq</strong> — fast inference for quick responses</li>
        <li><strong>Custom endpoint</strong> — point to any OpenAI-compatible API (local LLMs, corporate proxies, etc.)</li>
      </ul>
      <p>Switch providers or models any time in <strong>Settings → AI Enhancement → Post-processing</strong>. Agent Mode automatically uses whatever you've configured.</p>

      <h2>Setup (30 Seconds)</h2>
      <ol>
        <li>Open <strong>Mellon → Settings → AI Enhancement → Post-processing</strong></li>
        <li>Select your AI provider and enter your API key</li>
        <li>Go to the <strong>Agent Mode</strong> tab and toggle it on</li>
        <li>Start dictating — any time you say "Hey Mellon", the rest of your sentence becomes an AI command</li>
      </ol>

      <h2>Why Voice + AI Matters</h2>
      <p>Copy-pasting text into ChatGPT, waiting for a response, then pasting it back is slow. Agent Mode eliminates that entire loop. You stay in your app, in your flow. Select text, speak a command, and the result appears — all in a few seconds.</p>
      <p>For anyone who writes a lot — emails, docs, code comments, messages — this turns your voice into an AI-powered editing tool. And since everything runs through your own API key, there's no Mellon subscription or middleman.</p>

      <div class="cta-block">
        <p><strong>Try Agent Mode today.</strong> <a href="/#pricing">Download Mellon free</a>, configure your AI provider, and start commanding AI with your voice.</p>
      </div>
    `,
  },
  {
    slug: "openclaw-local-speech-to-text-mellon",
    title: "How to Add Local Speech-to-Text to OpenClaw with Mellon",
    description: "Step-by-step guide to configuring OpenClaw with Mellon for private, local voice transcription. OpenAI-compatible Whisper API with custom dictionary support — no cloud needed.",
    date: "2026-02-20",
    excerpt: "Give your OpenClaw AI agent local speech-to-text superpowers. This guide shows you how to configure Mellon as a private, on-device transcription backend — with custom dictionary and spellcheck built in.",
    content: `
      <p>If you're using <a href="https://openclaw.com">OpenClaw</a> to build AI agents that handle voice messages, you need a speech-to-text backend. Most setups send audio to cloud APIs like OpenAI's Whisper — but what if you want it <strong>fast, private, and free</strong>?</p>
      <p><strong>Mellon</strong> runs a local Whisper model on your Mac and exposes an OpenAI-compatible API. That means OpenClaw can use it as a drop-in replacement — no API keys, no cloud, no per-minute billing. Your audio never leaves your device.</p>
      <p><em>Available in Mellon v1.4.0+.</em></p>

      <h2>Setup (2 minutes)</h2>

      <h3>Step 1: Install Mellon</h3>
      <p><a href="/#pricing">Download Mellon</a> (free) and launch it. The Whisper model downloads automatically on first launch.</p>

      <h3>Step 2: Enable the API Server</h3>
      <p>Open Mellon's settings and go to <strong>API Server</strong>. Toggle the server on. It starts on <code>http://localhost:8765</code> by default.</p>
      <p>Verify it's running:</p>
      <pre><code>curl http://localhost:8765/health
# {"status": "ok", "model_loaded": true}</code></pre>

      <h3>Step 3: Configure OpenClaw</h3>
      <p>Add this to your <code>openclaw.json</code> config file:</p>
      <pre><code>{
  "tools": {
    "media": {
      "audio": {
        "enabled": true,
        "models": [{
          "provider": "openai",
          "model": "whisper-1",
          "baseUrl": "http://127.0.0.1:8765/v1"
        }]
      }
    }
  }
}</code></pre>
      <p>That's it. Restart OpenClaw and send a voice message — it'll be transcribed locally by Mellon.</p>

      <h2>What You Get</h2>
      <p>Mellon doesn't just run Whisper. When OpenClaw sends audio to the <code>/v1/audio/transcriptions</code> endpoint, it goes through the <strong>full transcription pipeline</strong>:</p>
      <ol>
        <li><strong>Whisper transcription</strong> — on-device, using Apple's Neural Engine for speed</li>
        <li><strong>Custom dictionary matching</strong> — your custom terms (product names, people, jargon) are phonetically matched and corrected</li>
        <li><strong>Medical dictionary</strong> — if enabled, medical terminology is automatically recognized</li>
        <li><strong>Spellcheck corrections</strong> — common Whisper mistakes are caught and fixed</li>
      </ol>
      <p>For example, if you've added "ChronoCat" and "Mellon" to your custom dictionary, Whisper's output of <em>"I updated chrono cat and opened melon"</em> gets automatically corrected to <em>"I updated ChronoCat and opened Mellon"</em>.</p>

      <h2>All Available Endpoints</h2>
      <p>Mellon exposes several endpoints depending on your needs:</p>

      <h3>POST /v1/audio/transcriptions</h3>
      <p><strong>Recommended.</strong> OpenAI-compatible (multipart/form-data). Full pipeline: Whisper + spellcheck + custom dictionary.</p>
      <pre><code>curl -X POST http://localhost:8765/v1/audio/transcriptions \\
  -F "file=@recording.wav" \\
  -F "model=whisper-1"

# {"text": "I updated ChronoCat and opened Mellon."}</code></pre>

      <h3>POST /transcribe-full</h3>
      <p>Raw audio body. Same full pipeline, but returns detailed correction data and timing.</p>
      <pre><code>curl -X POST http://localhost:8765/transcribe-full \\
  --data-binary @recording.wav \\
  -H "Content-Type: application/octet-stream"

# {
#   "success": true,
#   "text": "I updated ChronoCat and opened Mellon.",
#   "whisper_text": "I updated chrono cat and opened melon.",
#   "corrections": [
#     {"original": "chrono cat", "corrected": "ChronoCat", "source": "custom"}
#   ],
#   "timing": {"whisper_ms": 1024, "spellcheck_ms": 2, "total_ms": 1026}
# }</code></pre>

      <h3>POST /transcribe</h3>
      <p>Raw audio body. Whisper only — no spellcheck or dictionary corrections.</p>
      <pre><code>curl -X POST http://localhost:8765/transcribe \\
  --data-binary @recording.wav \\
  -H "Content-Type: application/octet-stream"

# {"success": true, "text": "I updated chrono cat.", "duration_ms": 1025}</code></pre>

      <h3>GET /health</h3>
      <p>Returns server status and whether the Whisper model is loaded.</p>

      <h2>Supported Audio Formats</h2>
      <p>All endpoints accept: <strong>WAV, MP3, M4A, FLAC, AIFF, OGG</strong> (OGG requires macOS 14+). Audio is automatically converted — no pre-processing needed.</p>

      <h2>Custom Dictionary Tips</h2>
      <p>To get the most out of the API, add your commonly used terms in <strong>Mellon → Settings → Dictionary</strong>:</p>
      <ul>
        <li><strong>Product names</strong> — brand names, app names, project codenames</li>
        <li><strong>People's names</strong> — colleagues, contacts, team members</li>
        <li><strong>Technical jargon</strong> — industry-specific terms Whisper might misspell</li>
        <li><strong>Medical terms</strong> — enable the medical dictionary toggle for healthcare terminology</li>
      </ul>
      <p>These corrections apply automatically to every API transcription — no configuration per-request.</p>

      <h2>Privacy</h2>
      <p>The API server only listens on <code>localhost</code>. All processing happens on your Mac using Apple Silicon's Neural Engine. No audio data leaves your device, ever. No API keys, no accounts, no usage tracking.</p>

      <div class="cta-block">
        <p><strong>Ready to add local speech-to-text to your OpenClaw agent?</strong> <a href="/#pricing">Download Mellon free</a> — the API server is included with every installation.</p>
      </div>
    `,
  },
  {
    slug: "best-dictation-app-mac-2025",
    title: "What Is the Best Dictation App for Mac in 2025? (Compared)",
    description: "Comparing the best dictation apps for Mac: Mellon, Wispr, MacWhisper, VoiceInk & more. Find the best speech-to-text and voice typing software for your needs.",
    date: "2025-02-05",
    excerpt: "Looking for the best dictation app for Mac? We compare the top speech-to-text and voice typing software—including free options—so you can find the right fit.",
    content: `
      <p>If you're searching for the <strong>best dictation app for Mac</strong>, you're not alone. Voice dictation and speech-to-text software have exploded in popularity as people look for faster ways to write. The average person types at 40–70 words per minute (WPM), but the <strong>best dictation apps</strong> can reach 120–150+ WPM with high accuracy. That's a game-changer for emails, docs, and notes.</p>
      
      <h2>What Makes a Great Dictation App?</h2>
      <p>The best dictation software for Mac should offer: <strong>accuracy</strong> (especially for medical and technical terms), <strong>privacy</strong> (does your voice go to the cloud?), <strong>speed</strong>, and <strong>universal app support</strong>—so you can dictate into any text field, not just one app.</p>
      
      <h2>Comparing the Best Dictation Apps for Mac</h2>
      <p><strong>Mellon</strong> is a free, privacy-first dictation app that runs 100% locally on your Mac. No subscriptions, no cloud—your voice never leaves your device. It works in every app, supports custom shortcuts, and reaches 150+ WPM. If you want the best free dictation app with zero privacy trade-offs, Mellon is hard to beat.</p>
      <p><strong>Wispr</strong> and <strong>VoiceInk</strong> are popular paid options with cloud processing. <strong>MacWhisper</strong> uses Whisper AI locally with a one-time purchase. <strong>Apple's built-in dictation</strong> is free but sends audio to Apple's servers and requires internet.</p>
      
      <h2>Best Free Dictation App for Mac</h2>
      <p>For the <strong>best free dictation software</strong> that keeps everything on your Mac, Mellon stands out. No account, no subscription, no data collection. Just download and start dictating. It's the best free speech-to-text app for Mac users who care about privacy and speed.</p>
      
      <div class="cta-block">
        <p><strong>Ready to try the best dictation app for Mac?</strong> <a href="/#pricing">Download Mellon free</a> and start dictating in seconds.</p>
      </div>
    `,
  },
  {
    slug: "best-free-dictation-apps-compared",
    title: "Best Free Dictation Apps Compared: Speech-to-Text for Mac (2025)",
    description: "Compare the best free dictation apps and speech-to-text software for Mac. Mellon, Apple Dictation, and other free voice typing options reviewed.",
    date: "2025-02-03",
    excerpt: "Comparing the best free dictation apps for Mac. Which free speech-to-text and voice typing software is right for you? We break it down.",
    content: `
      <p>Finding the <strong>best free dictation apps</strong> for Mac can be tricky. Many "free" options are either limited, send your voice to the cloud, or push you toward paid plans. Here's an honest comparison of the top free speech-to-text and voice typing software for Mac.</p>
      
      <h2>Apple Dictation (Built-in)</h2>
      <p>macOS includes free built-in dictation. It's convenient, but it sends your voice to Apple's servers for processing—so it requires internet and isn't fully private. Accuracy is good for general use but can struggle with technical terms and medical vocabulary.</p>
      
      <h2>Mellon: Free, Local, Private</h2>
      <p><strong>Mellon</strong> is one of the few truly free dictation apps that processes everything on your Mac. No cloud, no account, no subscription. Your voice never leaves your device. It works offline, in every app, and reaches 150+ WPM. For the best free dictation software that respects your privacy, Mellon is the top choice.</p>
      
      <h2>Other Free Options</h2>
      <p>Browser-based tools like Dictation.io are free but only work in the browser. Some apps offer free tiers with limits (e.g., recording length or daily caps). If you want unlimited, private, system-wide dictation for free, Mellon is the standout.</p>
      
      <h2>Why Free Dictation Matters</h2>
      <p>Voice typing shouldn't require a subscription. Whether you're a student, professional, or someone with typing difficulties, access to good speech-to-text software matters. Mellon proves that the best free dictation app can also be the most private.</p>
      
      <div class="cta-block">
        <p><strong>Try the best free dictation app for Mac.</strong> <a href="/#pricing">Download Mellon</a>—no signup, no payment, no strings attached.</p>
      </div>
    `,
  },
  {
    slug: "how-to-type-faster-vs-voice-dictation",
    title: "How to Type Faster: Keyboard Tips vs Voice Dictation (Which Wins?)",
    description: "How to type faster with QWERTY keyboard tips, or skip typing entirely with voice dictation. Compare typing speed vs speech-to-text at 150 WPM.",
    date: "2025-02-01",
    excerpt: "Want to type faster? We compare keyboard tips, typing speed, and QWERTY techniques with voice dictation—and show why many people are switching to speech-to-text.",
    content: `
      <p>"<strong>How can I type faster?</strong>" is one of the most searched questions online. The average person types 40 WPM. Professional typists hit 70–90 WPM. But here's the thing: even the best typists can't match voice dictation. The best dictation apps reach 120–150+ words per minute with high accuracy. So the real question might be: should you learn to type faster, or switch to voice?</p>
      
      <h2>How to Type Faster: Classic Tips</h2>
      <p>If you stick with a keyboard, these tips help: <strong>touch typing</strong> (use all fingers, don't look at the keys), proper <strong>QWERTY keyboard</strong> posture, and practice. The best keyboards for typing include mechanical options that reduce fatigue. Aim for 70+ WPM as a professional benchmark. But improving typing speed takes months of practice.</p>
      
      <h2>Voice Dictation: Skip the Keyboard</h2>
      <p>Voice dictation lets you speak at 150+ WPM without touching a keyboard. No carpal tunnel, no typing fatigue, no learning curve. Tools like Mellon process speech locally on your Mac—so you get speed, privacy, and accuracy in one. For heavy writers, emails, and docs, voice dictation often beats even the fastest typists.</p>
      
      <h2>Typing Speed vs Dictation Speed</h2>
      <p>At 60 WPM typing, 3,000 words takes 50 minutes. At 150 WPM with dictation, it takes 20 minutes. That's 30 minutes saved per day—over 6 hours per week. The best dictation apps aren't just faster; they're dramatically faster.</p>
      
      <h2>Best of Both Worlds</h2>
      <p>Many people use both: keyboard for quick edits and short messages, voice dictation for long-form writing. The best dictation software works in every app, so you can switch seamlessly. Mellon is free and runs entirely on your Mac—no subscription, no cloud.</p>
      
      <div class="cta-block">
        <p><strong>Ready to 2x your writing speed?</strong> <a href="/#pricing">Download Mellon free</a> and try voice dictation today. No typing required.</p>
      </div>
    `,
  },
  {
    slug: "best-speech-to-text-mac-privacy",
    title: "Best Speech-to-Text for Mac: Why Privacy-First Dictation Matters",
    description: "The best speech-to-text app for Mac keeps your voice on your device. Compare cloud vs local dictation and why privacy matters for voice typing.",
    date: "2025-01-28",
    excerpt: "When you use speech-to-text, does your voice go to the cloud? We explain why privacy-first dictation matters and which Mac apps keep your data local.",
    content: `
      <p>When you ask for the <strong>best speech-to-text</strong> or <strong>best dictation app</strong> for Mac, accuracy and speed matter. But so does privacy. Many dictation apps send your voice to remote servers for processing. That means your words—meeting notes, medical dictation, personal messages—are stored and processed by third parties. If that bothers you, you need a privacy-first option.</p>
      
      <h2>Cloud vs Local Speech-to-Text</h2>
      <p>Cloud-based dictation (Wispr, Otter, Google Docs voice typing) sends your audio to servers. It's fast and feature-rich, but your data leaves your device. Local dictation (Mellon, MacWhisper, some VoiceInk modes) processes everything on your Mac. Your voice never leaves your computer. No internet required. No data collection.</p>
      
      <h2>Why Privacy Matters for Voice Typing</h2>
      <p>Voice is biometric data. What you dictate can include sensitive information—client names, health details, confidential ideas. The best speech-to-text app for privacy-conscious users keeps that data on your device. Mellon does exactly that: 100% local processing, no cloud, no account, no tracking.</p>
      
      <h2>Best Dictation App for Privacy</h2>
      <p>Mellon is free and runs entirely on your Mac. It works offline, in every app, with 150+ WPM accuracy. If you want the best dictation software that never sends your voice anywhere, Mellon is the answer. Download once, own it forever—no subscription, no strings.</p>
      
      <div class="cta-block">
        <p><strong>Your words stay on your Mac.</strong> <a href="/#pricing">Get Mellon free</a> and experience privacy-first voice dictation.</p>
      </div>
    `,
  },
  {
    slug: "voice-dictation-adhd-productivity",
    title: "Voice Dictation for ADHD: How Speech-to-Text Boosts Productivity",
    description: "For ADHD, typing can be a barrier. Voice dictation removes friction and helps you capture ideas. Best dictation apps for ADHD productivity.",
    date: "2025-01-20",
    excerpt: "ADHD and typing don't always mix. Voice dictation lets you speak your thoughts as they come—no keyboard, no friction. Here's how it helps.",
    content: `
      <p>If you have ADHD, you know the struggle: ideas come fast, but getting them onto the page can feel like climbing a wall. Typing requires sustained focus, fine motor control, and the patience to sit at a keyboard. For many with ADHD, that's a barrier. <strong>Voice dictation</strong> changes the equation. You speak; the words appear. No keyboard required.</p>
      
      <h2>Why Dictation Helps ADHD</h2>
      <p>Voice dictation removes the friction between thinking and writing. Ideas flow directly from your mind to the page. You're not fighting the QWERTY keyboard or losing focus mid-sentence. The best dictation apps for ADHD users work in every app—notes, email, docs—so you can capture thoughts wherever they strike.</p>
      
      <h2>Best Dictation App for ADHD</h2>
      <p>Mellon is built for this. It's free, runs locally on your Mac (no distractions from signup flows or subscriptions), and works in any text field. One shortcut, and you're dictating. It's part of the Chronocat ecosystem—tools designed with ADHD productivity in mind. No account, no cloud, no friction.</p>
      
      <h2>Speed and Simplicity</h2>
      <p>At 150+ WPM, voice dictation is faster than most people can type. For ADHD, that speed matters: capture the idea before it slips away. Mellon keeps it simple—no complex setup, no learning curve. Just speak and write.</p>
      
      <div class="cta-block">
        <p><strong>Reduce friction. Capture ideas.</strong> <a href="/#pricing">Download Mellon free</a> and try voice dictation for ADHD productivity.</p>
      </div>
    `,
  },
];
