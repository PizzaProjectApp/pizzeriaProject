type Sort = "asc" | "desc";

interface ExecutePaginationProps {
    limit: number;
    page: number;
    sort: Sort;
    productUrl: string;
    totalPages: number;
    products: any;
}

export const executePagination = async ({
    page,
    limit,
    sort,
    productUrl,
    totalPages,
    products
}: ExecutePaginationProps) => {
    const baseUrl: string = `/api/v1/${productUrl}?limit=${limit}&sort=${sort}`;

    let hasPrevPage: boolean = page > 1;
    let hasNextPage: boolean = page < totalPages;

    let prevPage: number | null = hasPrevPage ? page - 1 : null;
    let nextPage: number | null = hasNextPage ? page + 1 : null;
    const status: number | string = products.length === 0 ? "error" : "success";
    let prevLink: string | null = hasPrevPage ? `${baseUrl}&page=${prevPage}` : null;
    let nextLink: string | null = hasNextPage ? `${baseUrl}&page=${nextPage}` : null;

    const results = {
        status,
        payload: products,
        page,
        totalPages,
        hasPrevPage,
        hasNextPage,
        prevPage,
        nextPage,
        prevLink,
        nextLink
    };

    return results;
};
