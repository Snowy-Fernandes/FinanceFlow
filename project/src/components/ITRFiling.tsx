import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileUp, FileCheck, AlertCircle } from "lucide-react";

const itrTypes = [
  { id: 'itr1', name: 'ITR-1 (Sahaj)', description: 'For individuals with salary/pension income' },
  { id: 'itr2', name: 'ITR-2', description: 'For individuals and HUFs with capital gains' },
  { id: 'itr3', name: 'ITR-3', description: 'For individuals and HUFs having business income' },
  { id: 'itr4', name: 'ITR-4 (Sugam)', description: 'For presumptive business income' },
];

const requiredDocs = [
  'Form 16 from employer',
  'Bank statements',
  'Investment proofs',
  'Rent receipts (if applicable)',
];

export function ITRFiling() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg mb-6">
          <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-blue-900">Important Notice</h4>
            <p className="text-sm text-blue-700">The due date for filing ITR for AY 2024-25 is July 31, 2024</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Select ITR Type</h3>
            <RadioGroup defaultValue="itr1">
              <div className="grid gap-4">
                {itrTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={type.id} id={type.id} />
                    <Label htmlFor={type.id} className="flex flex-col">
                      <span className="font-medium">{type.name}</span>
                      <span className="text-sm text-muted-foreground">{type.description}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
            <div className="grid gap-2">
              {requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <FileCheck className="h-4 w-4 text-green-600" />
                  {doc}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Upload Documents</h3>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <FileUp className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your documents here, or click to browse
              </p>
              <Button variant="outline">Choose Files</Button>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Save as Draft</Button>
            <Button>File ITR</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}