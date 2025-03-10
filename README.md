# 🌍 International Clock

A simple **JavaScript-based digital clock** that displays the time in different countries based on the user's selection. The project utilizes the **Intl.DateTimeFormat API** to format the time according to each country's language and style.

---

## 🚀 Features

✅ Displays formatted time from different countries  
✅ Updates the clock **every second** using `setInterval`  
✅ Uses **Intl.DateTimeFormat** to format the time based on the selected country  
✅ Prevents duplicate intervals with `clearInterval`

## 🎯 How It Works

1️⃣ The user selects a country by clicking a button.  
2️⃣ The clock updates instantly, displaying the time in that country's **language and format**.  
3️⃣ The old interval is cleared using `clearInterval`, ensuring no duplicate updates.  
4️⃣ The new interval starts with `setInterval`, updating the time **every second**.
