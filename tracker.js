// Tracking number to child mapping
const trackingNumbers = {
    'SAMTSIRHCDNUMROT1': 'tormund',
    'SAMTSIRHCALLEUL1': 'luella',
    'SAMTSIRHCARODASI1': 'isadora'
};

// Child configuration with themes and details
const childConfig = {
    luella: {
        name: 'Luella',
        age: 7,
        elfName: 'Snowflake Jr.',
        avatar: '❄️',
        theme: 'pink',
        greeting: 'Luella\'s Elf Journey'
    },
    tormund: {
        name: 'Tormund',
        age: 5,
        elfName: 'Brave Lion',
        avatar: '🦁',
        theme: 'blue-purple',
        greeting: 'Tormund\'s Elf Journey'
    },
    isadora: {
        name: 'Isadora',
        age: 'Coming Soon',
        elfName: 'Little Star',
        avatar: '⭐',
        theme: 'default',
        greeting: 'Isadora\'s Elf Journey'
    }
};

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

// Helper function to parse date string in local timezone
function parseLocalDate(dateString) {
    const parts = dateString.split('-');
    // new Date(year, month, day) creates a date in local timezone
    // Note: month is 0-indexed, so subtract 1
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Get tracking number from URL
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get('tracking');

    // Validate tracking number
    if (!trackingNumber || !trackingNumbers[trackingNumber]) {
        // Invalid or missing tracking number - redirect to landing page
        window.location.href = 'index.html';
        return;
    }

    const childName = trackingNumbers[trackingNumber];
    const config = childConfig[childName];

    // Apply theme
    document.body.classList.add(`theme-${config.theme}`);

    // Update page content
    displayCurrentDate();
    displayTrackingNumber(trackingNumber);
    updatePageContent(childName, config);
    createSnowfall();
    updateElfTracking(childName);
});

// Display current date
function displayCurrentDate() {
    const currentDateElement = document.getElementById('currentDate');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Display tracking number
function displayTrackingNumber(trackingNumber) {
    document.getElementById('displayTrackingNumber').textContent = trackingNumber;
}

// Update page content with child-specific information
function updatePageContent(childName, config) {
    // Update header subtitle
    document.getElementById('childName').textContent = config.greeting;

    // Update intro message
    document.getElementById('introMessage').innerHTML = `
        <p>Track ${config.elfName}'s magical journey from the North Pole! 🌟</p>
    `;

    // Update elf card
    document.getElementById('elfAvatar').textContent = config.avatar;
    document.getElementById('elfTitle').textContent = `${config.name}'s Elf - ${config.elfName}`;

    if (typeof config.age === 'number') {
        document.getElementById('childInfo').textContent = `Age ${config.age}`;
    } else {
        document.getElementById('childInfo').textContent = config.age;
    }
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

// Update elf tracking
function updateElfTracking(childName) {
    const elfData = elfTrackingData[childName];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find current status
    let currentStatus = 'preparing';
    let statusText = 'Preparing at North Pole...';
    let statusIcon = '📦';

    for (const update of elfData.updates) {
        const updateDate = parseLocalDate(update.date);
        updateDate.setHours(0, 0, 0, 0);

        if (updateDate <= today) {
            currentStatus = update.status;
            statusText = update.description;
            statusIcon = update.icon;
        }
    }

    // Update status badge
    const statusBadge = document.getElementById('statusBadge');
    statusBadge.className = `status-badge ${currentStatus}`;
    statusBadge.innerHTML = `
        <span class="status-icon">${statusIcon}</span>
        <span class="status-text">${statusText}</span>
    `;

    // Build timeline - ONLY show updates up to today
    buildTimeline(elfData.updates, today);

    // Update map visualization
    updateMapPosition(currentStatus);
}

// Update map visualization based on current status
function updateMapPosition(status) {
    const movingElf = document.getElementById('movingElf');
    const markers = document.querySelectorAll('.location-marker');

    // Position coordinates for each status
    const positions = {
        'preparing': { x: 400, y: 50 },      // North Pole
        'in-transit': { x: 300, y: 200 },    // Arctic Circle / Canada
        'out-for-delivery': { x: 200, y: 280 }, // Canada
        'delivered': { x: 100, y: 350 }      // Gilbert, AZ
    };

    const position = positions[status] || positions.preparing;

    // Move elf icon to position
    movingElf.setAttribute('transform', `translate(${position.x}, ${position.y})`);
    movingElf.classList.add('active');

    // Highlight active markers based on status
    markers.forEach((marker, index) => {
        const circle = marker.querySelector('.marker-circle');
        if (circle && !circle.classList.contains('destination')) {
            circle.classList.remove('active');
        }
    });

    // Highlight current location marker
    if (status === 'preparing') {
        markers[0]?.querySelector('.marker-circle')?.classList.add('active');
    } else if (status === 'in-transit') {
        markers[1]?.querySelector('.marker-circle')?.classList.add('active');
        markers[2]?.querySelector('.marker-circle')?.classList.add('active');
    } else if (status === 'out-for-delivery') {
        markers[2]?.querySelector('.marker-circle')?.classList.add('active');
    } else if (status === 'delivered') {
        markers[3]?.querySelector('.marker-circle')?.classList.add('active');
    }
}

// Build timeline - ONLY shows past and current updates
function buildTimeline(updates, today) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    updates.forEach((update) => {
        const updateDate = parseLocalDate(update.date);
        updateDate.setHours(0, 0, 0, 0);

        // ONLY show updates up to and including today
        if (updateDate <= today) {
            let itemClass = 'timeline-item';
            if (updateDate < today) {
                itemClass += ' completed';
            } else if (updateDate.getTime() === today.getTime()) {
                itemClass += ' current';
            }

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
setInterval(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingNumber = urlParams.get('tracking');
    if (trackingNumber && trackingNumbers[trackingNumber]) {
        updateElfTracking(trackingNumbers[trackingNumber]);
        displayCurrentDate();
    }
}, 3600000);
