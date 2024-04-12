interface loginUserResponse<TData> {
  data: TData | null;
  error: { code: number; message: string } | null;
}

export enum ApiCall {
  LoginUser = "loginUser",
  GetUser = "getUser"
}

export const server = {
  loginUser: async <TData, TBody>(
    body: TBody
  ): Promise<loginUserResponse<TData>> => {
    const res = await fetch("/v1/login_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return { data: null, error: await res.json() };
    }

    return { data: await res.json(), error: null };
  },

  getUser: async <TData, TParam>(
    param: TParam
  ): Promise<loginUserResponse<TData>> => {
    const res = await fetch(`/v1/get_user/${param}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("access_token")}`
        },
      });
  
      if (!res.ok) {
        return { data: null, error: await res.json() };
      }
  
      return { data: await res.json(), error: null };
  },
};
