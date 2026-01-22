export default function Help() {
    return (
      <div className="pt-55 min-h-screen min-w-screen  px-6">
       <div className="justify-center flex item-center"><h1 className="text-2xl font-bold mb-4">❓ Help & Support</h1></div> 
  
        <div className="space-y-4  text-center px-6">
          <div>
            <h2 className="font-semibold ">How to add a product?</h2>
            <p className="">
              Go to Home → Fill the form → Click submit.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold">How to view reports?</h2>
            <p className="">
              Click on Report from the sidebar.
            </p>
          </div>
  
          <div>
            <h2 className="font-semibold">Need more help?</h2>
            <p className="">
              Contact support at <span className="font-medium">support@email.com</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  