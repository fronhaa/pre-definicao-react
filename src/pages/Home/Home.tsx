import { Button } from '../../components/Button/Button.tsx';

export function Home() {
    return (
        <>
            <h1>Home</h1>
            <div>
                <Button variant="blue" label="button 1"/>
                <Button variant="green" label="button 2"/>
                <Button variant="orange" label="button 3"/>
                <Button variant="yellow" label="button 4"/>
            </div>
        </>
    );
}