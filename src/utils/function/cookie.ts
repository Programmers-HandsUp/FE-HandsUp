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

  const filteredCookies = cookies.filter((cookieString) => {
    const trimmedCookie = cookieString.trim();
    return trimmedCookie.startsWith(name + "=");
  });

  const cookieValues = filteredCookies.map((cookie) =>
    cookie.substring(name.length + 2).trim()
  );

  return cookieValues.join(", ").length <= 0 ? null : cookieValues.join(", ");
};

export const setCookie = ({ name, value, options = {} }: setCookieParams) => {
  const { expires, maxAge, path } = options || {};
  let cookieString = `${name}=${value}`;
  if (expires) {
    cookieString += `; expires=${expires.toUTCString()}`;
  }
  if (maxAge) {
    cookieString += `; max-age=${maxAge}`;
  }
  if (path) {
    cookieString += `; path=${path}`;
  }
  document.cookie = cookieString;
};
