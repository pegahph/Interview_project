const usersDataStructure = { 
        editable: {
            name: {
                translation: 'نام',
                type: 'text',
                required: true
            },
            lastName: {
                translation: 'نام خانوادگی',
                type: 'text',
                required: true
            },
            username: {
                translation: 'نام کاربری',
                type: 'text',
                required: true
            },
            email: {
                translation: 'ایمیل',
                type: 'email',
                required: true
            },
            password: {
                translation: 'رمز عبور',
                type: 'password',
                required: true
            },
            image: {
                translation: 'تصویر پروفایل',
                type: 'file',
                required: false
            }
        },
        editableByAdmin: {
            role: 'نقش',
        },
        noneEditable: {
            id: '',
        }
}

export default usersDataStructure;
