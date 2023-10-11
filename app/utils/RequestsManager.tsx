import axios from 'axios';
import { parse } from 'node-html-parser';

export const getLoginAddress = async () => {
    try {
        const response = await axios.get('https://ubism.aydin.edu.tr', { withCredentials: false });

        const root = parse(response.data);
        const form = root.querySelector('#LoginForm');
        const actionURL = form.getAttribute('action');
        return actionURL;
    } catch (error) {
        console.error('Error getting login address:', error);
        return null;
    }
};

export const performLoginAndGetLinks = async (actionURL, username, password) => {
    const data = {
        UserName: username,
        PassWord: password,
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    try {
        const response = await axios.post(actionURL, new URLSearchParams(data).toString(), config);
        const root = parse(response.data);
        const links = root.querySelectorAll('a').map(a => a.getAttribute('href'));
        return links;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
};

// Function to perform a GET request to a given URL
export const getDashboardData = async (url) => {
    try {
        const response = await axios.get(`https://ubism.aydin.edu.tr${url}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting data from ${url}:`, error);
        return null;
    }
};

export const getLessonDetails = async (url) => {
    try {
        const response = await axios.get(url);
        const root = parse(response.data);
        const cards = root.querySelectorAll('.card__details');

        const lessonDetails = cards.map((card) => {
            const fullLessonText = card.querySelector('.card__title a').innerText;
            const teacherName = card.querySelector('.card__text').innerText;

            const [lessonCode, lessonName] = fullLessonText.split('/').map(str => str.trim());

            return {
                lessonCode,
                lessonName,
                teacherName
            };
        });

        return lessonDetails;
    } catch (error) {
        console.error('Error fetching lesson details:', error);
        return null;
    }
};

export const getAnnouncements = async () => {
    // Fetch the HTML data from the URL (replace with your actual URL)
    const { data: html } = await axios.get(`https://ubism.aydin.edu.tr/?Pointer=MobileApp&Page=News`);

    // Parse the HTML content
    const root = parse(html);

    // Find the divs related to each tab (Replace if your class selectors are different)
    const tabs = root.querySelectorAll('.tabs__content');

    // Initialize announcements array
    let announcements = [];

    // Loop through each tab to find the category you're interested in
    var tabIndex = 0;
    for (const tab of tabs) {
        const cards = tab.querySelectorAll('.card');

        // Loop through each card and extract the announcement details
        cards.forEach((card) => {
            const titleElement = card.querySelector('.card__title a');
            const announcement = titleElement ? titleElement.text : '';

            const dateElement = card.querySelector('.card__text');
            const date = dateElement ? dateElement.text : '';

            console.log(announcement);
            const type = tabIndex === 0 ? 'General' : tabIndex === 1 ? 'Faculty' : 'Course';

            announcements.push({ announcement, date, type });
        });
        tabIndex++;
    }

    // // Filter based on category (You can add more conditions based on your actual HTML structure)
    // const generalAnnouncements = announcements.filter((a) => a.title.includes("General"));
    // const facultyAnnouncements = announcements.filter((a) => a.title.includes("Faculty"));
    // const courseAnnouncements = announcements.filter((a) => a.title.includes("Course"));

    return announcements;
    // return { generalAnnouncements, facultyAnnouncements, courseAnnouncements };
};