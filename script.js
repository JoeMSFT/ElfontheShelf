// Elf Tracking Data
const elfTrackingData = {
    luella: {
        name: "Snowflake Jr.",
        updates: [
            {
                date: "2024-11-17",
                status: "preparing",
                icon: "🎅",
                description: "Your elf received special assignment from Santa!",
                location: "Santa's Workshop, North Pole"
            },
            {
                date: "2024-11-19",
                status: "preparing",
                icon: "📝",
                description: "Elf training completed - learned all about Luella!",
                location: "Elf Academy, North Pole"
            },
            {
                date: "2024-11-21",
                status: "preparing",
                icon: "🎁",
                description: "Packing magical supplies for the journey",
                location: "North Pole Supply Center"
            },
            {
                date: "2024-11-23",
                status: "in-transit",
                icon: "✈️",
                description: "Departed North Pole on Santa's Express Sleigh",
                location: "En route"
            },
            {
                date: "2024-11-25",
                status: "in-transit",
                icon: "🌨️",
                description: "Flying over snowy mountains - weather is perfect!",
                location: "Arctic Circle"
            },
            {
                date: "2024-11-27",
                status: "in-transit",
                icon: "🌟",
                description: "Passing through magical Northern Lights",
                location: "Canadian Airspace"
            },
            {
                date: "2024-11-28",
                status: "out-for-delivery",
                icon: "🚚",
                description: "Arrived at regional distribution center!",
                location: "Local Sorting Facility"
            },
            {
                date: "2024-11-29",
                status: "out-for-delivery",
                icon: "📦",
                description: "Out for delivery - very close now!",
                location: "Your City"
            },
            {
                date: "2024-11-30",
                status: "delivered",
                icon: "🏠",
                description: "Delivered to Dad's House - Ready for magic!",
                location: "House of Raleigh"
            }
        ]
    },
    tormund: {
        name: "Brave Lion",
        updates: [
            {
                date: "2024-11-17",
                status: "preparing",
                icon: "🎅",
                description: "Your elf received special assignment from Santa!",
                location: "Santa's Workshop, North Pole"
            },
            {
                date: "2024-11-19",
                status: "preparing",
                icon: "📝",
                description: "Elf training completed - learned all about Tormund!",
                location: "Elf Academy, North Pole"
            },
            {
                date: "2024-11-21",
                status: "preparing",
                icon: "🎁",
                description: "Packing magical supplies for the journey",
                location: "North Pole Supply Center"
            },
            {
                date: "2024-11-23",
                status: "in-transit",
                icon: "✈️",
                description: "Departed North Pole on Santa's Express Sleigh",
                location: "En route"
            },
            {
                date: "2024-11-25",
                status: "in-transit",
                icon: "🌨️",
                description: "Flying over snowy mountains - weather is perfect!",
                location: "Arctic Circle"
            },
            {
                date: "2024-11-27",
                status: "in-transit",
                icon: "🌟",
                description: "Passing through magical Northern Lights",
                location: "Canadian Airspace"
            },
            {
                date: "2024-11-28",
                status: "out-for-delivery",
                icon: "🚚",
                description: "Arrived at regional distribution center!",
                location: "Local Sorting Facility"
            },
            {
                date: "2024-11-29",
                status: "out-for-delivery",
                icon: "📦",
                description: "Out for delivery - very close now!",
                location: "Your City"
            },
            {
                date: "2024-11-30",
                status: "delivered",
                icon: "🏠",
                description: "Delivered to Dad's House - Ready for magic!",
                location: "House of Raleigh"
            }
        ]
    },
    isadora: {
        name: "Little Star",
        updates: [
            {
                date: "2024-11-17",
                status: "preparing",
                icon: "🎅",
                description: "Special baby elf assignment from Santa!",
                location: "Santa's Workshop, North Pole"
            },
            {
                date: "2024-11-19",
                status: "preparing",
                icon: "💝",
                description: "Elf training for future baby sister Isadora!",
                location: "Elf Academy, North Pole"
            },
            {
                date: "2024-11-21",
                status: "preparing",
                icon: "🎁",
                description: "Packing extra-gentle magical supplies",
                location: "North Pole Supply Center"
            },
            {
                date: "2024-11-23",
                status: "in-transit",
                icon: "✈️",
                description: "Departed North Pole on Santa's Express Sleigh",
                location: "En route"
            },
            {
                date: "2024-11-25",
                status: "in-transit",
                icon: "🌨️",
                description: "Flying over snowy mountains - extra care for baby elf!",
                location: "Arctic Circle"
            },
            {
                date: "2024-11-27",
                status: "in-transit",
                icon: "⭐",
                description: "Traveling through magical starlight",
                location: "Canadian Airspace"
            },
            {
                date: "2024-11-28",
                status: "out-for-delivery",
                icon: "🚚",
                description: "Arrived at regional distribution center!",
                location: "Local Sorting Facility"
            },
            {
                date: "2024-11-29",
                status: "out-for-delivery",
                icon: "📦",
                description: "Out for delivery - very close now!",
                location: "Your City"
            },
            {
                date: "2024-11-30",
                status: "delivered",
                icon: "🏠",
                description: "Delivered to Dad's House - Waiting for Isadora!",
                location: "House of Raleigh"
            }
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentDate();
    createSnowfall();
    updateAllElves();
});

// Display current date
function displayCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Create snowfall effect
function createSnowfall() {
    const snowContainer = document.getElementById('snowContainer');
    const snowflakes = ['❄', '❅', '❆'];
    const numberOfFlakes = 50;

    for (let i = 0; i < numberOfFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowContainer.appendChild(snowflake);
    }
}

// Update all elves
function updateAllElves() {
    updateElf('luella');
    updateElf('tormund');
    updateElf('isadora');
}

// Update individual elf tracking
function updateElf(childName) {
    const elfData = elfTrackingData[childName];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find current status
    let currentStatus = 'preparing';
    let statusText = 'Preparing at North Pole...';
    let statusIcon = '📦';
    let latestUpdate = null;

    for (const update of elfData.updates) {
        const updateDate = new Date(update.date);
        updateDate.setHours(0, 0, 0, 0);

        if (updateDate <= today) {
            currentStatus = update.status;
            statusText = update.description;
            statusIcon = update.icon;
            latestUpdate = update;
        }
    }

    // Update status badge
    const statusBadge = document.getElementById(`status-${childName}`);
    statusBadge.className = `status-badge ${currentStatus}`;
    statusBadge.innerHTML = `
        <span class="status-icon">${statusIcon}</span>
        <span class="status-text">${statusText}</span>
    `;

    // Build timeline
    buildTimeline(childName, elfData.updates, today);
}

// Build timeline
function buildTimeline(childName, updates, today) {
    const timeline = document.getElementById(`timeline-${childName}`);
    timeline.innerHTML = '';

    updates.forEach((update, index) => {
        const updateDate = new Date(update.date);
        updateDate.setHours(0, 0, 0, 0);

        let itemClass = 'timeline-item';
        if (updateDate < today) {
            itemClass += ' completed';
        } else if (updateDate.getTime() === today.getTime()) {
            itemClass += ' current';
        }

        // Only show updates up to today or slightly in the future for suspense
        const futureLimit = new Date(today);
        futureLimit.setDate(futureLimit.getDate() + 3);

        if (updateDate <= futureLimit) {
            const timelineItem = document.createElement('div');
            timelineItem.className = itemClass;
            timelineItem.innerHTML = `
                <div class="timeline-icon">${update.icon}</div>
                <div class="timeline-content">
                    <div class="timeline-date">${formatDate(updateDate)}</div>
                    <div class="timeline-description">${update.description}</div>
                    <div class="timeline-location">📍 ${update.location}</div>
                </div>
            `;
            timeline.appendChild(timelineItem);
        }
    });
}

// Format date for display
function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Refresh every hour to keep status up to date
setInterval(updateAllElves, 3600000);
