export default function imageToken(url_video) {

    if (url_video === null) {
        return ""
    }

    let image_id = url_video.split(" ")[3];
    image_id = image_id.split("/")[4];
    image_id = image_id.split("?")[0];

    return image_id
}
