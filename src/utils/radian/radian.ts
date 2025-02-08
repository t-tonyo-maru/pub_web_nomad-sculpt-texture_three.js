/**
 * Converts a radian value to its equivalent degree value.
 *
 * @param radian - Target radian value.
 * @returns Output degree value.
 */
export const convertRadianToDegree = (radian: number): number =>
  radian * (180 / Math.PI)

/**
 * Converts a degree value to its equivalent radian value.
 *
 * @param degree - Target degree value.
 * @returns Output radian value.
 */
export const convertDegreeToRadian = (degree: number): number =>
  degree * (Math.PI / 180)
