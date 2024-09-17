import { Link, Head } from '@inertiajs/react';
import { Button } from 'flowbite-react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <h1>Welcome</h1>
            <Button>halo</Button>
        </>
    );
}
