
const getSettings = (service, settingId) => {

    return service.settings.filter((setting) => {
        return setting.id === settingId ? true : false
    })[0]

}

export default getSettings