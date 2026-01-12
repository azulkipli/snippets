/**
 * Check if cookies exist in file
 */
export function hasCookies(cookiePath: string = "./cookies.json"): boolean {
  const absolutePath = path.resolve(cookiePath);

  if (!fs.existsSync(absolutePath)) {
    return false;
  }

  try {
    const content = fs.readFileSync(absolutePath, "utf-8");
    const cookies = JSON.parse(content);
    return Array.isArray(cookies) && cookies.length > 0;
  } catch {
    return false;
  }
}
