'use client';

interface UserProfileProps {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  readonly isAdmin?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, age, email, isAdmin }) => {
  return (
    <div>
      <h2>ชื่อ : {name}</h2>
      <p>อายุ : {age}</p>
      <p>อีเมล์ : {email}</p>
      {isAdmin && <p>คุณเป็นผู้ดูแลระบบ</p>}
    </div>
  );
};

export default UserProfile;