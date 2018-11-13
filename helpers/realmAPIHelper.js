
module.exports.getRealmAPIData = (config, ign) => {
    var url = `${config.realmeyeAPI}${ign}`;
    console.log(url);
    return request.get(url);
}