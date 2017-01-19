
const getService = (services, serviceId) => {

    return services.filter((service) => {
        return service.id === serviceId ? true : false
    })[0]

}

export default getService