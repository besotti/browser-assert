const assert = (condition: unknown, message?: string) => {
    if (!Boolean(condition)) {
        throw new Error(message || 'unknown assertion error');
    }
};

export = assert;