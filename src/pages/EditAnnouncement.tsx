import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, Save } from "lucide-react";

interface AnnouncementForm {
  announcementText: string;
  buttonText: string;
  buttonLink: string;
}

const EditAnnouncement = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<AnnouncementForm>({
    defaultValues: {
      announcementText: "POLWEL IS AROUND FOR EVERY OF YOUR MILESTONE",
      buttonText: "Find out more",
      buttonLink: "#"
    }
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: AnnouncementForm) => {
    // Here you would typically save to a backend or local storage
    console.log("Announcement data:", data);
    console.log("Selected image:", selectedImage);
    
    toast.success("Announcement updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
      <div className="container mx-auto max-w-2xl py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Edit Announcement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Announcement Text */}
              <div className="space-y-2">
                <Label htmlFor="announcementText">Announcement Text</Label>
                <Textarea
                  id="announcementText"
                  placeholder="Enter announcement text"
                  {...register("announcementText", { 
                    required: "Announcement text is required" 
                  })}
                />
                {errors.announcementText && (
                  <p className="text-sm text-destructive">
                    {errors.announcementText.message}
                  </p>
                )}
              </div>

              {/* Button Text */}
              <div className="space-y-2">
                <Label htmlFor="buttonText">Button Text</Label>
                <Input
                  id="buttonText"
                  placeholder="Enter button text"
                  {...register("buttonText", { 
                    required: "Button text is required" 
                  })}
                />
                {errors.buttonText && (
                  <p className="text-sm text-destructive">
                    {errors.buttonText.message}
                  </p>
                )}
              </div>

              {/* Button Link */}
              <div className="space-y-2">
                <Label htmlFor="buttonLink">Button Link</Label>
                <Input
                  id="buttonLink"
                  type="url"
                  placeholder="Enter button link (e.g., https://example.com)"
                  {...register("buttonLink", { 
                    required: "Button link is required",
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$|^#$/,
                      message: "Please enter a valid URL or #"
                    }
                  })}
                />
                {errors.buttonLink && (
                  <p className="text-sm text-destructive">
                    {errors.buttonLink.message}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label htmlFor="imageUpload">Announcement Image</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <div className="mt-4">
                      <label htmlFor="imageUpload" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-foreground">
                          Click to upload or drag and drop
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          PNG, JPG, WEBP up to 10MB
                        </span>
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                
                {imagePreview && (
                  <div className="mt-4">
                    <Label>Image Preview</Label>
                    <div className="mt-2 border rounded-lg overflow-hidden">
                      <img 
                        src={imagePreview} 
                        alt="Announcement preview" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  <Save className="mr-2 h-4 w-4" />
                  Save Announcement
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditAnnouncement;