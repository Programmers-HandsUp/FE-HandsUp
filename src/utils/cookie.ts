interface getCookieParams {
  name: string;
}

interface setCookieParams {
  name: string;
  value: string;
  options?: CookieOptions;
}
interface CookieOptions {
  expires?: Date;
  maxAge?: number;
  path?: string;
}

export const getCookie = ({ name }: getCookieParams) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};
export const setCookie = ({ name, value, options = {} }: setCookieParams) => {
  options = options || {};
  let cookieString = `${name}=${value}`;
  if (options.expires) {
    cookieString += `; expires=${options.expires.toUTCString()}`;
  }
  if (options.maxAge) {
    cookieString += `; max-age=${options.maxAge}`;
  }
  if (options.path) {
    cookieString += `; path=${options.path}`;
  }
  document.cookie = cookieString;
};
