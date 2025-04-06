# ENGO651 - Lab 6: Drawing and Simplifying Polylines

This lab demonstrates how to integrate **Turf.js** with **Leaflet.js** to simplify user-drawn polylines in a web mapping application. Users can draw a line on the map, simplify it with the click of a button, and reset the map to draw a new line.



## 🧭 Features

- Draw a polyline on the map using an interactive tool.
- Simplify the polyline using Turf.js’s `simplify` function.
- View the simplified line in a different color.
- Reset the map to draw a new polyline.



## 📍 Map Details

- **Location**: Calgary, Alberta (centered near Calgary Tower)
- **Coordinates**:  
  - **Latitude:** 51.0447  
  - **Longitude:** -114.0719



## 🧰 Technologies Used

- **Leaflet.js** – Interactive web mapping
- **Leaflet.draw** – Drawing polylines on the map
- **Turf.js** – Geometric analysis and line simplification
- **OpenStreetMap** – Basemap tile provider



## 🚀 How to Use

1. Open the application in a web browser.
2. Draw a polyline on the map using the toolbar.
3. Click **"Simplify Line"** to simplify the geometry of the drawn line.
4. Click **"Reset Map"** to clear the map and draw a new line.



## 📘 Notes

- Simplification tolerance is fixed but can be adjusted in the code.
- The simplified line is displayed in **red** for clarity.



## 🎓 Purpose

This application was built as part of **ENGO651** , Lab 6 assignment at the **University of Calgary**, to explore client-side geometry simplification using open-source mapping tools.

