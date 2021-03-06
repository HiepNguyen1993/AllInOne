export class NotifyType {
    public static DEFAULT = 'default';
    public static PRIMARY = 'primary';
    public static SUCCESS = 'success';
    public static INFO = 'info';
    public static WARNING = 'warning';
    public static DANGER = 'danger';
}

export class Constants {
    public static get STORAGE_USER_ID(): string { return 'user_id'; }
    public static get STORAGE_PROFILE(): string { return 'userProfile'; }
    public static get STORAGE_ACCESS_TOKEN(): string { return 'access_token'; }
}

export class LocalPath {
    public static get JSON(): string { return '/assets/json/'; }
}

export class PageMode {
    public static ADD = 'Add';
    public static EDIT = 'Edit';
    public static CLONE = 'Cloned';
    public static COPY = 'Copy';
}
