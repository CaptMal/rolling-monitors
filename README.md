⚓ # Rolling Monitors PWA
**Real-time parametric, synchronous, and operational rolling detection for cruise ships**

A Progressive Web App (PWA) for monitoring ship stability, rolling dynamics, wind forces, and under-keel clearance. Installs on iPhone home screen. Works offline. Designed for maritime operations with real-time calculations, editable parameters, and operational guidance.

![Version](https://img.shields.io/badge/version-2.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Platform](https://img.shields.io/badge/platform-iOS%20Safari-blueviolet)

---

## 📱 Quick Start (30 seconds)

### Install on iPhone
1. Open **Safari** on your iPhone
2. Go to: `https://captmal.github.io/rolling-monitors/`
3. Tap **Share** → **Add to Home Screen**
4. Tap **Add**
5. ✅ App appears on home screen

### Launch & Use
- Tap app icon → Opens fullscreen (no browser UI)
- Works offline with cached data
- Data stored locally on your device
- No internet required after first load

---

## 🎯 Features Overview

### **🌊 Rolling Monitor Suite (NEW)**
Integrated operational tools for wind, power, and under-keel clearance calculations.

#### **⚙️ Vessel Configuration**
- Set vessel specifications (LBP, Beam, Draft, Engine Power, etc.)
- Quick presets for common vessel types:
  - Explorer of the Seas (cruise ship)
  - Generic Vessel (template)
  - Supertanker
  - Container Ship
- Save/Load configurations (stored locally on iPhone)
- Stabilizer toggle options
- Configuration shared across all monitors

#### **💨 Wind & Bollard Pull**
- **Wind Force Calculation**
  - Wind speed slider: 0-60 knots
  - Wind direction: 0-180° relative to bow
  - Real-time force calculation (kN)
  - Drag coefficient based on wind direction
  
- **Bollard Pull Requirements**
  - Calculates required power accounting for wind force
  - Includes hydrodynamic resistance
  - Compares required vs available engine power
  - Safety margin percentage indicator
  - Status: ✓ Adequate / ⚠ Caution / ✗ Insufficient

#### **📏 UKC - Pitching**
- **Wave-Induced Pitching Effects**
  - Wave height: 1-12 meters
  - Water depth: 5-50 meters
  - Squat effect: 0-2 meters
  
- **Draft Analysis**
  - Current vessel draft
  - Pitching effect breakdown
  - Squat effect contribution
  - Total effective draft increase
  
- **Under-Keel Clearance**
  - Available UKC calculation
  - Safe/Caution/Danger status colors
  - Minimum 0.5m safety margin guidance

#### **🎯 UKC - Rolling**
- **Roll Motion Calculations**
  - Wave height & period inputs
  - Roll amplitude in degrees
  - Draft increase from roll motion
  
- **Stabilizer Configuration**
  - Three options: OFF / 1 FIN / 2 FINS
  - Real-time comparison calculations
  - Shows performance difference with stabilizers
  - Damping effect modeling
  
- **Performance Comparison**
  - Side-by-side metrics (with/without stabilizers)
  - Roll amplitude reduction
  - Draft increase reduction
  - Available UKC improvement

---

### **📊 Parametric Rolling Monitor**
Real-time detection and monitoring of parametric rolling hazards.

#### **Core Calculations**
- ✅ **Frequency Ratio (Tn/Tw)**
  - Wave encounter period
  - Natural roll period
  - Danger band: 1.8-2.2× (red zone)
  - Real-time ratio display

#### **Stability Parameters (Editable)**
- **GM Fluid** (dynamic): 1.0-2.25 m slider
  - Current vessel metacentric height
  - Affects roll frequency
  - Real-time recalculation

- **GM Required** (threshold): 1.0-2.25 m slider
  - Minimum stability requirement
  - Danger threshold indicator
  - Visual margin display

- **GM Reserve** (buffer): -0.10 to +0.75 m slider
  - Safety margin above minimum
  - Green = safe, Red = at risk
  - Buffer for sea state variation

#### **Stabilizer Control**
- ✅ Fin stabilizer ON/OFF toggle
- ✅ 40% damping effect when active
- ✅ Reduces roll amplitude
- ✅ Improves frequency ratio

#### **Navigation & Sea State**
- **Course Heading**
  - 0-360° input
  - Real-time updates
  - Compass-aware

- **Sea Direction Relative to Heading**
  - Head sea, Quartering, Beam, Stern
  - Visual classification
  - Hazard assessment

- **Wave Period & Height**
  - Encounter period calculation
  - Ship heading effects
  - Visual wave hazard indicator

#### **Real-Time Monitoring**
- ✅ Current List (heel angle)
- ✅ Max Oscillation (amplitude)
- ✅ Trend detection (increasing/stable/decreasing)
- ✅ Visual status indicators

#### **Observation Logging**
- ✅ Timestamp capture
- ✅ Notes entry
- ✅ Data persistence
- ✅ CSV export for records
- ✅ Full observation history

---

### **🔄 Synchronous Rolling Monitor**
Detects synchronous rolling (wave-ship frequency matching).

#### **Synchronous Detection**
- ✅ **Frequency Ratio ≈ 1.0×**
  - Wave frequency matches natural roll frequency
  - Danger band: 0.85-1.15× (18-22 second waves)
  - High risk of large roll amplitudes

#### **Real-Time Monitoring**
- ✅ Current List (heel angle)
- ✅ Max Oscillation (roll amplitude)
- ✅ Frequency ratio trend
- ✅ Danger band warning

#### **Navigation Control**
- **Course Correction**
  - Heading 0-360°
  - Sea direction relative to ship
  - Real-time encounter period updates

#### **Comparison Tools**
- ✅ Parametric vs Synchronous risk assessment
- ✅ Side-by-side frequency ratio display
- ✅ Recommended actions
- ✅ Risk prioritization

#### **Observation Logging**
- ✅ Timestamp capture
- ✅ Notes entry
- ✅ Data persistence
- ✅ CSV export

---

## ⚙️ Configuration Page

### **Vessel Profile Setup**
- Vessel name & registry
- Hull dimensions (LBP, Beam, Draft)
- Block coefficient (Cb)
- DWT tonnage
- Water depth reference

### **Equipment Inventory**
- Main engine output (kW)
- Mast height
- Projected area (for wind calculations)
- Fin stabilizer fitted? (Yes/No)
- Roll stabilizer fitted? (Yes/No)

### **Preset Vessels**
Load pre-configured profiles:
- Explorer of the Seas
- Generic Vessel
- Supertanker
- Container Ship

---

## 💾 PWA Features

### **Installation**
- ✅ Installs to iPhone home screen
- ✅ Full-screen app mode (no browser UI)
- ✅ Custom app icon & splash screen
- ✅ App-like experience
- ✅ No app store required

### **Offline Capability**
- ✅ Works completely offline
- ✅ Service worker caching
- ✅ Offline fallback page
- ✅ Zero internet required after first load

### **Data Persistence**
- ✅ All data stored locally (`localStorage`)
- ✅ Configuration auto-saves
- ✅ Observation logs persist
- ✅ No cloud sync (private)
- ✅ Survives app closure & phone restart

### **Performance**
- ✅ Fast load times (<1s with Starlink)
- ✅ Responsive sliders
- ✅ Real-time calculations
- ✅ Smooth animations
- ✅ Mobile-optimized UI

### **Export & Backup**
- ✅ CSV export of observation logs
- ✅ Text export of calculations
- ✅ Downloadable to iPhone Files app
- ✅ Email-able reports

---

## 🗂️ File Structure

```
rolling-monitors/
├── index.html                 # Home page with all monitors
├── parametric.html           # Parametric rolling monitor
├── synchronous.html          # Synchronous rolling monitor
├── config.html              # Original config (legacy)
├── rolling-config.html      # Vessel configuration
├── rolling-wind.html        # Wind & bollard pull
├── rolling-pitch.html       # UKC pitching
├── rolling-roll.html        # UKC rolling
├── manifest.json            # PWA metadata
├── offline.html             # Offline fallback
├── sw.js                    # Service worker
└── README.md                # This file
```

---

## 🚀 Deployment

Hosted on GitHub Pages at:
```
https://captmal.github.io/rolling-monitors/
```

### Direct Page Links
- Home: `https://captmal.github.io/rolling-monitors/`
- Parametric: `https://captmal.github.io/rolling-monitors/parametric.html`
- Synchronous: `https://captmal.github.io/rolling-monitors/synchronous.html`
- Configuration: `https://captmal.github.io/rolling-monitors/rolling-config.html`
- Wind & Bollard: `https://captmal.github.io/rolling-monitors/rolling-wind.html`
- UKC Pitching: `https://captmal.github.io/rolling-monitors/rolling-pitch.html`
- UKC Rolling: `https://captmal.github.io/rolling-monitors/rolling-roll.html`

---

## 📊 How to Use Each Monitor

### **Parametric Rolling Monitor**
1. Open app
2. Go to Configuration → Set your vessel specs
3. Go to Parametric monitor
4. Enter current heading (0-360°)
5. Enter wave period (seconds)
6. Adjust GM sliders to match current stability
7. Watch frequency ratio indicator
8. If ratio 1.8-2.2 → **DANGER ZONE** → Course correction needed
9. Toggle fin stabilizer ON to reduce risk
10. Log observations for record

### **Synchronous Rolling Monitor**
1. Similar setup to parametric
2. Watch for ratio ≈ 1.0× (danger zone 0.85-1.15×)
3. This is **wave frequency = ship natural frequency**
4. Requires immediate course correction
5. Adjust heading to increase encounter period
6. Monitor trend in oscillation

### **Wind & Bollard Monitor**
1. Go to Configuration → Set your vessel
2. Go to Wind monitor
3. Enter current wind speed (knots)
4. Enter wind direction relative to bow
5. Watch real-time calculations:
   - Wind force (kN)
   - Required bollard pull
   - Available engine power
   - Safety margin
6. Red status = insufficient power → Reduce wind exposure

### **UKC Pitching Monitor**
1. Go to Configuration → Set water depth & draft
2. Go to UKC Pitch
3. Enter current wave height
4. Enter squat effect (typically 0.3-0.5m)
5. Review draft breakdown:
   - Current draft
   - Pitching effect
   - Squat effect
   - Total effective draft
6. Check available UKC:
   - Green (>1.0m) = Safe
   - Amber (0.5-1.0m) = Caution
   - Red (<0.5m) = Danger

### **UKC Rolling Monitor**
1. Go to Configuration → Set vessel specs
2. Go to UKC Roll
3. Enter wave height & period
4. Select stabilizer config (OFF/1 FIN/2 FINS)
5. Compare performance:
   - With stabilizers = reduced roll
   - Without stabilizers = increased roll
6. Check available UKC at bottom
7. Stabilizers reduce risk significantly

---

## 🔧 Technical Details

### **Technologies Used**
- HTML5
- CSS3 (CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Service Worker (offline support)
- localStorage API (data persistence)
- Web Manifest (PWA installation)

### **Browser Support**
- ✅ Safari on iOS 12.2+
- ✅ Chrome on Android
- ✅ Edge on any OS
- ✅ Firefox on any OS

### **Performance**
- Total app size: ~350 KB (uncompressed)
- All files: 8 HTML + JS + CSS
- Load time: <1 second (Starlink)
- Offline: Instant after first load

---

## ⚠️ Important Notes

### **Disclaimer**
- This app is a **decision support tool**, not a replacement for:
  - Professional stability calculations
  - Vessel-specific analysis
  - Regulatory compliance
  - Captain's judgment

- **Always verify calculations independently**
- Use in conjunction with:
  - Official stability documentation
  - Weather routing
  - Coast Guard/Flag State regulations
  - Bridge procedures manual

### **Data Safety**
- ✅ All data stored **locally on your iPhone**
- ✅ No cloud sync or external servers
- ✅ No personal data collected
- ✅ Works completely offline
- ✅ Data persists on device until manually cleared

### **Updates**
- Updates deploy automatically via GitHub Pages
- Hard refresh in Safari to get latest version
- Previous data persists across updates
- Manifest version controls cache invalidation

---

## 📱 Sharing with Crew

Send crew members the link:
```
https://captmal.github.io/rolling-monitors/
```

Each person installs independently on their iPhone:
1. Open Safari
2. Paste the URL
3. Tap Share → Add to Home Screen
4. Tap Add
5. App appears on home screen

Each person's data is separate and private.

---

## 🛠️ Development & Customization

### **Modifying the App**
The app uses simple HTML + CSS + JavaScript (no build process).

To customize:
1. Edit the .html files
2. Commit to GitHub
3. GitHub Pages auto-deploys in 1-2 minutes
4. Hard refresh in Safari to see changes

### **Common Customizations**
- Change vessel presets in `rolling-config.html`
- Adjust color scheme in CSS variables
- Add more navigation links in navbar
- Modify calculation formulas in JavaScript

### **Adding Features**
Each page is self-contained:
- Edit the page's JavaScript section
- Add new sliders, inputs, displays
- Calculations update in real-time
- localStorage handles data persistence

---

## 📝 Version History

### **v2.0 - Rolling Monitor Suite** (Current)
- ✨ NEW: Vessel Configuration page
- ✨ NEW: Wind & Bollard Pull calculator
- ✨ NEW: UKC Pitching analysis
- ✨ NEW: UKC Rolling analysis with stabilizer comparison
- 🎨 Updated home page with all monitors
- 🔄 Unified navigation across all pages
- 💾 Shared configuration storage

### **v1.0 - Initial Release**
- Parametric Rolling Monitor
- Synchronous Rolling Monitor
- Basic configuration page
- Observation logging
- CSV export

---

## 📧 Contact & Support

**Repository:** `https://github.com/captmal/rolling-monitors`

**Report Issues:**
- Check file uploads
- Wait 2-3 minutes for GitHub Pages deployment
- Hard refresh Safari (pull down)
- Clear cache if needed

---

## 📄 License

MIT License - Free to use and modify

---

## 🙏 Acknowledgments

Built for real-world maritime operations.
Tested on Explorer of the Seas.
Designed for bridge operations.

**⚓ Safe sailing! ⚓**

Live App: https://captmal.github.io/rolling-monitors/
Home Page: https://captmal.github.io/rolling-monitors/index.html
Parametric Monitor: https://captmal.github.io/rolling-monitors/parametric.html
Synchronous Monitor: https://captmal.github.io/rolling-monitors/syn
