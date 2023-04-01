interface ISettings {
	[key: string]: string;
}

const GENERAL_SETTINGS: ISettings = {
    "company_name": "Chez Sylvie",
    "company_description": "“Sur place, à livrer ou emporter.”",
    "menu_button_text": "Voir le menu",
};

class SettingsHelper {
	private static getLocalSettings(): ISettings {
        return GENERAL_SETTINGS;
	}

	public static getSetting(key: string): string {
		const settings = this.getLocalSettings();
		if (settings && settings[key]) {
			return settings[key];
		} else {
			return '';
		}
	}
}

export { SettingsHelper };
