import { Head } from "shared/ui";
import {Button, Card, Input} from "../../../../../poc-ui/src/components"

export const DashboardPage = () => {
  return (
    <>
      <Head title="Dashboard" />
      <h1 className="text-4xl font-bold">Dashboard</h1>
        <Button label="Open" color="primary" variant="contained" size="md" className="text-white"/>
        <Card className="">
            Test
        </Card>
        <Input className="outline-none" placeholder="test" label="Test input" variant="contained" color="error" error={true} errorMessage="Error occured" name="test-input" inputSize="md" shape="rounded"  />
    </>
  );
};
