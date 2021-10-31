import useSWR from 'swr';

const date = new Date().toISOString().split('T')[0];

const fetcher = (param: RequestInfo) =>
  fetch(`https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v${date}/data/query/production?query=${param}`).then(
    (r) => r.json()
  );

export const useArticles = () => {
  const { data, error } = useSWR('*[_type == "articles"]{..., portal->}', fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const useArticleBySlug = (slug: string) => {
  const query = encodeURIComponent(`*[_type == "articles" && slug.current == "${slug}"][0]{..., portal->}`);
  const { data, error } = useSWR(query, fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const usePortals = () => {
  const { data, error } = useSWR('*[_type == "portals"]', fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const usePortalBySlug = (slug: string) => {
  const query = encodeURIComponent(`*[_type == "portals" && slug.current == "${slug}"][0]`);
  const { data, error } = useSWR(query, fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const useCommittees = () => {
  const { data, error } = useSWR('*[_type == "committees"]', fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const useUsers = () => {
  const { data, error } = useSWR('*[_type == "users"]{..., committee->}', fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};

export const useUserByUsername = (username: string) => {
  const query = encodeURIComponent(`*[_type == "users" && username == "${username}"][0]{..., committee->}`);
  const { data, error } = useSWR(query, fetcher);

  return {
    data: data,
    loading: !error && !data,
    error: error,
  };
};
