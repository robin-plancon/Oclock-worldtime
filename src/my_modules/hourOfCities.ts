import { capitalCities } from "./capitalCities";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import "dayjs/locale/fr";

// Add advanced format plugin to dayjs
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const displayCityHour = (cityName: string) => {
    const city = capitalCities.find(
        (city) => city.name.toLowerCase() === cityName
    );
    if (city) {
        let resContent = "";

        const dayjsCity = dayjs().tz(city?.tz).locale("fr");
        resContent += `<h1>
            Nous sommes le ${dayjsCity.format(
                "Do MMMM YYYY"
            )}. Il est ${dayjsCity.format("HH:MM")} à ${city?.name} 
        </h1>
    `;
        return [resContent, '200'];
    } else {
        return([`${cityName} non trouvée. Erreur 404`, '404']);
    }
};
export { displayCityHour };
