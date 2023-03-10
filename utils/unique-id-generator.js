// Twitter Snowflake creates a 64-bit random, unique ID (as compared to 128-bit UUID). The ID is composed of:

// 41-bit Epoch timestamp (with millisecond precision)
// 10-bit machine ID (accommodates 1024 machines)
// 12-bit counter bits (generated by a local counter for every machine that rolls over when the number turns 4096)
// 1 extra bit for future use. By default, this bit is set to 0.

const generateSnowflakeId = () => {
  // Get the current timestamp in milliseconds
  const timestamp = Date.now();

  // Get a random worker ID (between 0 and 1023) Assuming This is mac address
  const workerId = Math.floor(Math.random() * 1024);

  // Get a random sequence number (between 0 and 4095) THis is counter start with 0 and goes till 4095 and again start with 0
  const sequence = Math.floor(Math.random() * 4096);

  // Combine the timestamp, worker ID, and sequence number to generate the snowflake ID
  const snowflakeId = (timestamp << 22) | (workerId << 12) | sequence;

  return snowflakeId;
};

export { generateSnowflakeId };



// A snowflake ID is a unique identifier that is generated by combining various pieces of information, 
// such as a timestamp, a worker ID, and a sequence number. Snowflake IDs are often used in distributed 
// systems to uniquely identify records or entities, as they are guaranteed to be unique across different
// machines and over time.

// The snowflake ID generator works by using the timestamp as the most significant bits, the worker ID as 
// the next most significant bits, and the sequence number as the least significant bits. The worker ID and 
// sequence number are used to differentiate IDs that were generated at the same time, and the timestamp 
// ensures that the IDs are unique over time.