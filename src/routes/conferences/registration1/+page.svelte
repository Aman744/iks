<script lang="ts">
  import { onMount } from "svelte";

  let fullName = "";
  let gender = "";
  let nationality = "";
  let contactNumber = "";
  let email = "";
  let institution = "";
  let designation = "";
  let other = "";
  let accommodation = "";
  let tentativeArrivalDate = "";
  let departureDate = "";
  let place = "";
  let amount = 0;
  let paymentStatus = "Pending"; // Default status

  const fees = {
    Student: 500,
    Professor: 1000,
    Others: 750
  };

  function updateAmount() {
    amount = fees[designation] || 0;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    const formData = {
      fullName,
      gender,
      nationality,
      contactNumber,
      email,
      institution,
      designation,
      other,
      accommodation,
      tentativeArrivalDate,
      departureDate,
      place,
      amount,
      paymentStatus
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxaAmoi1ylD1fu73zJFf0MDrlnjTcQxyXZHehluIvo0MD6Y2AWy-GcLrNwswzUY5Pw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Registration details saved! You can proceed with payment now.");
      } else {
        alert("Error saving registration details. Please try again.");
      }
   } 
   catch (error) {
      alert("Network error. Please check your connection and try again.");
    }
  }

  function openRazorpay() {
    var options = {
      key: "your_razorpay_key", 
      amount: amount * 100,
      currency: "INR",
      name: "Conference Registration",
      description: "Payment for Conference",
      handler: async function (response: any) {
        alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
        paymentStatus = "Paid"; 
        await updatePaymentStatus();
      },
      prefill: {
        name: fullName,
        email: email,
        contact: contactNumber
      }
    };

    var rzp = new Razorpay(options);
    rzp.open();
  }

  async function updatePaymentStatus() {
    const updateData = { email, paymentStatus: "Paid" };
    await fetch("https://script.google.com/macros/s/AKfycbxaAmoi1ylD1fu73zJFf0MDrlnjTcQxyXZHehluIvo0MD6Y2AWy-GcLrNwswzUY5Pw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateData)
    });
  }

  onMount(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  });
</script>


<h1>Conference Registration</h1>

<form on:submit={handleSubmit}>
  <label>Full Name:</label>
  <input type="text" bind:value={fullName} required /> <br>

  <label>Gender:</label>
<div class="radio-group">
  {#each ["Male", "Female", "Others"] as option}
    <label class="radio-label">
      <input type="radio" bind:group={gender} value={option} required />
      {option}
    </label>
  {/each}
</div> <br>

  <label>Nationality:</label>
  <select bind:value={nationality} required>
    <option value="">Select</option>
    <option value="Indian">Indian</option>
    <option value="Other">Other</option>
  </select> <br>

  <label>Contact Number:</label>
  <input type="tel" bind:value={contactNumber} required /> <br>

  <label>Email:</label>
  <input type="email" bind:value={email} required /> <br>

  <label>Name of Institution/Organization associated with: </label>
  <input type="text" bind:value={institution} required /> <br>

  <label>Designation/Current Position (if applicable):</label>
  <div class="radio-group">
  {#each ["Student", "Professor", "Others"] as option}
    <label class="radio-label">
      <input type="radio" bind:group={designation} value={option} on:change={updateAmount} required />
      {option}
    </label>
  {/each}
  </div> <br>

  {#if designation === "Others"}
  <input type="text" bind:value={other} placeholder="Enter your designation" required />
  {/if}
  <p><strong>Amount Payable: ₹{amount}</strong></p> <br>

  <label>Do you need accommodation (there may be some shared accommodation on a first-come, first-serve, and payment basis)?
  </label>
  <div class="radio-group">
  {#each ["Yes", "No"] as option}
    <label class="radio-label"> 
    <input type="radio" bind:group={accommodation} value={option} required /> {option} </label>
  {/each} 
  </div> <br>

  <label>Tentative Arrival Date:</label>
  <input type="date" bind:value={tentativeArrivalDate} /> <br>

  <label>Departure Date:</label>
  <input type="date" bind:value={departureDate} /> <br>

  <label>The place from where you will be coming for the conference:</label>
  <input type="text" bind:value={place} required /> <br>

  <button type="submit">Pay Now</button>
</form>

<style>
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select {
    display: block;
    margin-bottom: 15px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 20px;
    background-color: #9ac6ff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #9ac6ff;
  }

  /* New styles added for better radio button alignment */
  .radio-group {
    display: flex;
    gap: 8px; /* Adds spacing between each option */
    align-items:left;
  }

  .radio-label {
    display: flex;
    align-items: left;
    gap: 3px; /* Space between radio button and text */
  }
</style>
