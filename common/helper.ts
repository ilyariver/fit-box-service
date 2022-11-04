export function formatPhoneNumber(phoneNumber: string): string {
    const pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g
    return phoneNumber.replace(pattern, '+7 ($2) $3-$4-$5')
}
