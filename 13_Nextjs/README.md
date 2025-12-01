# Learnings from Next.js

## Learnings : Simple Routing
 - routing
 - file colocation
 - link 
 - shared layouts

## Advanced Routings
    - Dynamic Routing
    - Nested Routing
Eg : 
    - /products/[id]/page.jsx 
        - /products/1
        - /products/2
    - /products/[id]/reviews/[reviewId]/page.jsx
        - /products/1/reviews/10
        - /products/1/reviews/20
    - Catch All Routes
        - /docs/[...slug]/page.jsx
            - /docs/a
            - /docs/a/b
            - /docs/a/b/c
    - Routes Grouping : used to group routes without affecting the URL structure
        - /(admin)
            - login/page.jsx
            - dashboard/page.jsx
        - /(user)
            - profile/page.jsx
            - settings/page.jsx
    - Private Routes : https://dev.to/jonathan-dev/nextjs-best-way-to-organize-your-project-structure-25o6
            - _components/AuthProvider.jsx
            - _components/PrivateRoute.jsx
        

