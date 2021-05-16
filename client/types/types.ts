export type ProfileType = {
    userId: string,
    fullName: string,
    profilePhoto: PhotosType,
    status: string, //На стороне сервера указать его значение по умолчанию!
    contacts: ContactsType
}

export type PhotosType = {
    //Определить какой тип будет передавать сервер!
}

export type ContactsType = {
    vk: string,
    website: string,
    telegram: string
}