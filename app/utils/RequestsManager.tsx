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