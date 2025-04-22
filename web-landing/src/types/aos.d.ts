/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "aos" {
  const AOS: {
    init: (options?: any) => void;
    refresh: () => void;
    refreshHard: () => void;
  };

  export default AOS;
}
