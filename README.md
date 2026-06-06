⚓ Rolling Monitors PWA
Real-time parametric and synchronous rolling detection for cruise ships
A Progressive Web App (PWA) for monitoring ship stability and rolling dynamics. Installs on iPhone home screen. Works offline. Designed for maritime operations with real-time frequency ratio calculation, editable GM inputs, and course correction guidance.

📱 Install on iPhone
Quick Start (30 seconds)

Open Safari on your iPhone
Go to: https://captmal.github.io/rolling-monitors/
Tap Share → Add to Home Screen
Tap Add
✅ App appears on home screen

Launch
Tap app icon → Opens fullscreen (no browser UI) → Works offline

🎯 Features
Parametric Rolling Monitor

✅ Real-time frequency ratio calculation (danger band: 1.8-2.2×)
✅ Editable GM inputs:

GM Fluid (dynamic): 1.0-2.25 m slider
GM Required (threshold): 1.0-2.25 m slider
GM Reserve (buffer): -0.10 to +0.75 m slider


✅ Fin stabilizer on/off toggle with 40% damping effect
✅ Course correction with real-time heading updates
✅ Sea direction relative to ship heading (compass-aware)
✅ Wave hazard classification (Head, Quartering, Beam)
✅ Oscillation monitoring with trend detection
✅ Observation logging with timestamps

Synchronous Rolling Monitor

✅ Synchronous detection (frequency ratio ≈ 1.0×)
✅ Danger band: 0.85-1.15× (18-22 second waves)
✅ Course correction with heading calculations
✅ Sea direction relative to ship heading
✅ Wave hazard assessment
✅ Synchronous vs Parametric comparison table
✅ Real-time recommendations
✅ Roll amplitude monitoring
✅ Observation logging

PWA Features

✅ Offline access (service worker caching)
✅ Home screen installation (looks like native app)
✅ Fast loading (<1 second)
✅ No app store required
✅ Auto-updates when deployed


🚢 Ship Parameters (Configured)
Vessel Type:        338m Cruise Ship
Beam:               42m
Natural Roll Period (Tn): 20 seconds
Static GM:          1.64 m
Stability Reserve:  0.22 m
Fin Stabilizers:    8m span, 25.6 m² area
Frequency Danger Bands
Rolling TypeTriggerDanger BandWave PeriodRisk LevelParametric2.0× ratio1.8-2.2×10-20 secCRITICALSynchronous1.0× ratio0.85-1.15×18-22 secMODERATE

🎓 How It Works
Parametric Rolling

Occurs when wave frequency ≈ 0.5× natural roll frequency (2.0× ratio)
Metacentric height oscillates at 2× wave frequency
Energy pumped into roll motion → exponential amplitude growth
Max risk: Wave period 10-20 seconds
Mitigation: Reduce speed 2-3 knots OR alter course 15-20°

Synchronous Rolling

Occurs when wave frequency = natural roll frequency (1.0× ratio)
Ship rocks in sync with waves
Energy input ~1-2% per cycle → linear amplitude growth
Max risk: Wave period 18-22 seconds
Mitigation: Small speed change ±1-2 knots OR alter course 10°


📊 Real-Time Inputs
Sea State

Wave period (4-16 seconds)
Wave height (1-10 meters)
Current speed (10-30 knots)

Ship Position

Ship heading (0-360°)
Wave direction (0-360°)
Course correction (-60° to +60°)

Stability

GM Fluid: Current dynamic stability
GM Required: Operational threshold
GM Reserve: Safety buffer above minimum

Systems

Fin stabilizer: ON/OFF toggle
Current list (heel angle)
Max oscillation amplitude


🔧 Technical Details
Technology

Frontend: Vanilla JavaScript, HTML5, CSS3
Architecture: Progressive Web App (PWA)
Offline: Service Worker + Cache API
Storage: localStorage for observations
Performance: <1 second load, ~115 KB total

Files
index.html              Home page / app launcher
parametric.html         Parametric rolling monitor
synchronous.html        Synchronous rolling monitor
manifest.json          PWA metadata + app icons
offline.html           Offline fallback page
sw.js                  Service worker (caching)
Browser Support

✅ Safari (iOS 13+)
✅ Chrome (Android)
✅ Firefox
✅ Edge
✅ Works offline on all


📈 Monitoring Protocol
Every 15 Minutes During Watch:

Input current sea state (wave period, height, direction)
Input ship heading and course
Observe oscillation amplitude on display
Log observation with one-line note
Check risk level (green/yellow/red)
Take action if recommendations appear

Action Thresholds
🟢 GREEN (Safe)

Continue normal operations
Monitor every 15 minutes
No action needed

🟡 YELLOW (Caution)

Small speed adjustment (±1-2 knots) may help
Monitor oscillations closely
Prepare to alter course if amplitude grows

🔴 RED (Critical)

Reduce speed 2-3 knots immediately
OR alter course 15-20° away from head seas
Activate fin stabilizers if available
Monitor every 5 minutes
Notify master and crew


📱 Installation & Usage
First Time Setup

Open Safari on iPhone
Navigate to app URL
Tap Share → Add to Home Screen
App caches automatically
Works offline from second visit

Daily Use

Tap app icon on home screen
App opens fullscreen
Input sea state data
Monitor frequency ratio
Log observations every 15 min
App works completely offline

Updates

New versions deployed automatically
Pull down to refresh to get latest
No app store needed
All history preserved in observation log


🚀 Deployment
Live at:
https://captmal.github.io/rolling-monitors/
Hosted on:

GitHub Pages (free, unlimited)
Always available
Auto-updated via git push
Version control built-in

To Update:

Edit files locally
Push to GitHub: git push origin main
Wait 1-2 minutes
Users pull down to refresh


📝 Observation Logging
Each log entry captures:

Time: Exact timestamp
Note: User observation (e.g., "Oscillation growing", "Fin deployment")
Ratio: Current frequency ratio (×)
List: Current heel angle (°)
GM: Current dynamic GM (m)
Heading: Ship compass heading (°)
Wave Direction: Absolute wave bearing (°)
Relative Angle: Calculated relative to heading (°)

Observations persist in app and can be reviewed anytime.

🆘 Emergency Actions
If Parametric Rolling Detected (Red Alert)
Immediate (0-2 minutes):

✅ Notify bridge crew
✅ Reduce speed to 19.0 knots (or increase to 24+ knots)
✅ Activate fin stabilizers
✅ Verify ballast tanks full/empty (no free surface)

Monitoring (2-10 minutes):

✅ Monitor oscillations every 5 minutes
✅ Check if amplitude stabilizes
✅ If growing, alter course 15-20° away from head seas

If Escalates:

✅ Continue course/speed adjustment
✅ Monitor GM margin erosion
✅ Alert master and crew
✅ Be prepared for emergency stations


💡 Key Calculations
Frequency Ratio
Frequency Ratio = Wave Frequency / Ship Natural Frequency
                = (1 / Wave Period) / (1 / 20 seconds)
                = Wave Period / 20

Example:
  Wave period 10s → Ratio = 10/20 = 0.5× (Parametric risk? Yes, 2.0×)
  Wave period 20s → Ratio = 20/20 = 1.0× (Synchronous risk? Yes)
Wave Hazard Relative to Ship
Relative Angle = Wave Direction - Ship Heading
               = Normalized to ±180°

0° = Head seas (WORST)
90° = Beam seas (BEST)
180° = Following seas (MODERATE)
GM Margin
Effective GM = Fluid GM + (Fin Boost if active)
Margin = Effective GM - GM Required
Status = GREEN if >0.15m, RED if <0

📚 References
For Crew:

Parametric Rolling Guide: See in-app explanations
Synchronous Rolling Guide: See in-app comparison table
GM Requirements: US IMO Weather Criterion (0.15m minimum)
Fin Stabilizer Effects: 40% oscillation reduction + ~0.10m GM boost

Ship Documentation:

Stability curves: Review before voyage
Natural roll period: Confirm from stability analysis
GM calculations: Verified with load computer
Fin specifications: 8m span, 25.6 m² area


🔐 Data Privacy

All data is local - no cloud storage
No tracking - no analytics
No ads - clean interface
No login - works immediately
Observations stay on your device - not shared


📞 Support
If app doesn't work:

Refresh: Pull down on app
Clear cache: Safari Settings → Clear History/Website Data
Reinstall: Remove from home screen, reinstall from Safari
Offline mode: Put iPhone in airplane mode to test caching

For feature requests:
Create an issue in this GitHub repository

📋 Checklist Before Passage

 App installed on home screen
 Wave forecast reviewed for next 24 hours
 Ballast condition confirmed (full/empty tanks)
 Fin stabilizer system tested
 GM calculations verified
 Natural roll period confirmed (Tn = 20s)
 Bridge crew briefed on rolling risks
 Observation log ready to use
 Emergency procedures reviewed


🚢 Vessel Information
Captain's 3% Club - Rolling Monitors
Designed for 338m cruise ship operations.
Built for watch officers monitoring parametric and synchronous rolling.
Real-time decision support for bridge crew.

📄 License
Public use - no restrictions

🙋 About
Built by Captain Mal | Captain's 3% Club
June 2026
🌊 Safe sailing! Monitor your rolling, know your frequencies, stay ahead of resonance. ⚓

Quick Links

Live App: https://captmal.github.io/rolling-monitors/
Home Page: https://captmal.github.io/rolling-monitors/index.html
Parametric Monitor: https://captmal.github.io/rolling-monitors/parametric.html
Synchronous Monitor: https://captmal.github.io/rolling-monitors/syn
